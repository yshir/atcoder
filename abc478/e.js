const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

/**
 * Strongly connected components (Kosaraju, non-recursive).
 *
 * @example
 * //  0 -> 1 -> 2 -> 0     3 <-> 4
 * //            2 -> 3     5 -> 4
 * const g = new SccGraph(6);
 * g.addEdge(0, 1);
 * g.addEdge(1, 2);
 * g.addEdge(2, 0);
 * g.addEdge(2, 3);
 * g.addEdge(3, 4);
 * g.addEdge(4, 3);
 * g.addEdge(5, 4);
 * g.count;      // => 3
 * g.id(5);      // => 0
 * g.id(0);      // => 1
 * g.id(3);      // => 2
 * g.same(0, 2); // => true
 * g.same(2, 3); // => false
 * g.groups();   // => [[5], [0, 2, 1], [3, 4]]
 * g.dag();      // => [[2], [2], []]
 */
class SccGraph {
  #n;
  #from = [];
  #to = [];
  #built = false;
  #count = 0;
  #comp = null;
  #members = null;
  #head = null;
  #start = null;
  #adj = null;

  /**
   * Construct a graph with vertices `0 .. n-1` and no edges. - O(1)
   * @param {number} n
   */
  constructor(n) {
    this.#n = n;
  }

  /**
   * Add a directed edge `from -> to`. - O(1) amortized
   * Self-loops and parallel edges are allowed. Adding an edge after a query
   * discards the cached decomposition; the next query recomputes it.
   * @param {number} from
   * @param {number} to
   *
   * @example
   * const g = new SccGraph(2);
   * g.addEdge(0, 1);
   * g.count;        // => 2
   * g.addEdge(1, 0);
   * g.count;        // => 1
   */
  addEdge(from, to) {
    this.#from.push(from);
    this.#to.push(to);
    this.#built = false;
  }

  /**
   * Number of strongly connected components. - O(N + M) on the first query, then O(1)
   * @returns {number}
   *
   * @example
   * const g = new SccGraph(3);
   * g.addEdge(0, 1);
   * g.addEdge(1, 0);
   * g.addEdge(1, 2);
   * g.count; // => 2  ({0, 1} and {2})
   */
  get count() {
    this.#build();
    return this.#count;
  }

  /**
   * Component id of vertex `v`, in `0 .. count-1`. - O(N + M) on the first query, then O(1)
   * Ids are topologically ordered: every edge `u -> v` has `id(u) <= id(v)`.
   * @param {number} v
   * @returns {number}
   *
   * @example
   * const g = new SccGraph(3);
   * g.addEdge(0, 1);
   * g.addEdge(1, 0);
   * g.addEdge(1, 2);
   * g.id(0); // => 0
   * g.id(1); // => 0
   * g.id(2); // => 1  (downstream of {0, 1})
   */
  id(v) {
    this.#build();
    return this.#comp[v];
  }

  /**
   * Whether `u` and `v` can reach each other. - O(N + M) on the first query, then O(1)
   * @param {number} u
   * @param {number} v
   * @returns {boolean}
   *
   * @example
   * const g = new SccGraph(3);
   * g.addEdge(0, 1);
   * g.addEdge(1, 0);
   * g.addEdge(1, 2);
   * g.same(0, 1); // => true
   * g.same(1, 2); // => false (2 cannot go back to 1)
   */
  same(u, v) {
    this.#build();
    return this.#comp[u] === this.#comp[v];
  }

  /**
   * Vertices of every component; `groups()[c]` lists the vertices with id `c`. - O(N + M)
   * The order of vertices inside one group is unspecified.
   * @returns {number[][]}
   *
   * @example
   * const g = new SccGraph(3);
   * g.addEdge(0, 1);
   * g.addEdge(1, 0);
   * g.addEdge(1, 2);
   * g.groups(); // => [[0, 1], [2]]
   */
  groups() {
    this.#build();
    const count = this.#count;
    const members = this.#members;
    const head = this.#head;
    // Rows are allocated at their exact length: growing a `[]` by push
    // over-allocates per row, which dominates when there are many tiny groups.
    const out = new Array(count);
    for (let c = 0; c < count; c++) {
      const base = head[c];
      const len = head[c + 1] - base;
      const row = new Array(len);
      for (let j = 0; j < len; j++) row[j] = members[base + j];
      out[c] = row;
    }
    return out;
  }

  /**
   * Adjacency lists of the condensed DAG; `dag()[c]` lists the ids reachable
   * from component `c` by one edge. - O(N + M)
   * Parallel edges between two components are merged into one and edges
   * inside a component are dropped. Every listed id is greater than `c`, so
   * `for (c = 0; c < count; c++)` visits sources before their targets.
   * @returns {number[][]}
   *
   * @example
   * const g = new SccGraph(4);
   * g.addEdge(0, 1);
   * g.addEdge(1, 0);
   * g.addEdge(0, 2);
   * g.addEdge(1, 2); // second edge {0, 1} -> {2}, merged
   * g.addEdge(2, 3);
   * g.dag(); // => [[1], [2], []]
   */
  dag() {
    this.#build();
    const count = this.#count;
    const comp = this.#comp;
    const members = this.#members;
    const head = this.#head;
    const start = this.#start;
    const adj = this.#adj;
    // last[d] === c means "edge c -> d is already listed"; components are
    // processed one at a time, so one array serves all of them.
    const last = new Int32Array(count).fill(-1);
    // A row holds distinct ids, so `count` slots are enough to collect one
    // before copying it out at its exact length (see groups()).
    const buf = new Int32Array(count);
    const out = new Array(count);
    for (let c = 0; c < count; c++) {
      let len = 0;
      for (let i = head[c]; i < head[c + 1]; i++) {
        const v = members[i];
        for (let e = start[v]; e < start[v + 1]; e++) {
          const d = comp[adj[e]];
          if (d !== c && last[d] !== c) {
            last[d] = c;
            buf[len++] = d;
          }
        }
      }
      const row = new Array(len);
      for (let j = 0; j < len; j++) row[j] = buf[j];
      out[c] = row;
    }
    return out;
  }

  /** Run the decomposition unless a cached result is still valid. */
  #build() {
    if (this.#built) return;
    const n = this.#n;
    const g = SccGraph.#csr(n, this.#from, this.#to);
    const r = SccGraph.#csr(n, this.#to, this.#from); // reversed graph
    const gStart = g.start;
    const gAdj = g.adj;
    const rStart = r.start;
    const rAdj = r.adj;

    // 1) DFS on the graph, recording vertices in the order they are left.
    const order = new Int32Array(n);
    const cursor = gStart.slice(0, n); // next edge to look at, per vertex
    const seen = new Uint8Array(n);
    const stack = new Int32Array(n);
    let k = 0;
    for (let s = 0; s < n; s++) {
      if (seen[s]) continue;
      seen[s] = 1;
      let sp = 0;
      stack[sp++] = s;
      while (sp > 0) {
        const v = stack[sp - 1];
        if (cursor[v] < gStart[v + 1]) {
          const w = gAdj[cursor[v]++];
          if (!seen[w]) {
            seen[w] = 1;
            stack[sp++] = w;
          }
        } else {
          order[k++] = v; // every edge of v is done → leaving v
          sp--;
        }
      }
    }

    // 2) Sweep `order` from the back and search the reversed graph.
    //    Whatever one search newly reaches is exactly one component.
    //    Only the reached set matters here, so a BFS is enough, and
    //    `members` doubles as its queue: the group comes out for free.
    const comp = new Int32Array(n).fill(-1);
    const members = new Int32Array(n);
    const head = new Int32Array(n + 1);
    let count = 0;
    let tail = 0;
    for (let i = n - 1; i >= 0; i--) {
      const s = order[i];
      if (comp[s] !== -1) continue;
      let qh = tail;
      comp[s] = count;
      members[tail++] = s;
      while (qh < tail) {
        const v = members[qh++];
        for (let e = rStart[v]; e < rStart[v + 1]; e++) {
          const w = rAdj[e];
          if (comp[w] === -1) {
            comp[w] = count;
            members[tail++] = w;
          }
        }
      }
      head[++count] = tail;
    }

    this.#count = count;
    this.#comp = comp;
    this.#members = members;
    this.#head = head;
    this.#start = gStart;
    this.#adj = gAdj;
    this.#built = true;
  }

  /**
   * Pack an edge list into CSR form: the targets of the edges leaving `v`
   * are `adj[start[v]] .. adj[start[v + 1] - 1]`.
   */
  static #csr(n, from, to) {
    const m = from.length;
    const start = new Int32Array(n + 1);
    for (let i = 0; i < m; i++) start[from[i] + 1]++;
    for (let v = 0; v < n; v++) start[v + 1] += start[v];
    const pos = start.slice(0, n);
    const adj = new Int32Array(m);
    for (let i = 0; i < m; i++) adj[pos[from[i]]++] = to[i];
    return { start, adj };
  }
}

const scc = new SccGraph(N);

const E = [];
for (let i = 0; i < Q; i++) {
  let [t, u, v] = input[i + 1].split(' ').map(Number);
  u--;
  v--;
  scc.addEdge(u, v);
  if (t === 1) E.push([u, v]);
}

const ans = new Uint32Array(N);
for (const [i, component] of scc.groups().entries()) {
  for (const u of component) {
    ans[u] = i + 1;
  }
}

for (const [u, v] of E) {
  if (ans[u] === ans[v]) {
    console.log('No');
    return;
  }
}

console.log('Yes');
console.log(ans.join(' '));
