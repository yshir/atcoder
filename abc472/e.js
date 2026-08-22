let line = 0;
const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

class Queue {
  #stackPush = [];
  #stackPop = [];

  enqueue(value) {
    this.#stackPush.push(value);
  }

  dequeue() {
    if (this.#stackPop.length === 0) {
      while (this.#stackPush.length > 0) {
        this.#stackPop.push(this.#stackPush.pop());
      }
    }
    return this.#stackPop.pop();
  }

  empty() {
    return this.#stackPush.length === 0 && this.#stackPop.length === 0;
  }
}

while (T--) {
  const [N, M] = input[line++].split(' ').map(Number);
  const E = [];
  const G = [];
  for (let i = 0; i < N; i++) G[i] = [];
  for (let i = 0; i < M; i++) {
    let [a, b] = input[line++].split(' ').map(Number);
    a--;
    b--;
    E.push([a, b]);
    G[a].push(b);
    G[b].push(a);
  }

  const A = [];
  for (let i = 0; i < N; i++) A[i] = undefined;
  const q = new Queue();
  A[0] = 0;
  q.enqueue(0);

  const H = [];
  for (let i = 0; i < N; i++) H[i] = [];

  while (!q.empty()) {
    const u = q.dequeue();
    for (const v of G[u]) {
      if (A[v] !== undefined) continue;
      A[v] = A[u] ? 0 : 1;
      q.enqueue(v);
      H[u].push(v);
      H[v].push(u);
    }
  }

  let ans = null;
  for (let i = 0; i < M; i++) {
    const [a, b] = E[i];
    if (A[a] === A[b]) {
      ans = [];
      const dfs = (u, p = null) => {
        ans.push(u);
        if (u === b) return true;
        for (const v of H[u]) {
          if (p === v) continue;
          if (dfs(v, u)) return true;
        }
        ans.pop();
        return false;
      };
      dfs(a);
      break;
    }
  }

  if (ans === null) {
    console.log(-1);
  } else {
    console.log(ans.length);
    console.log(ans.map((x) => x + 1).join(' '));
  }
}
