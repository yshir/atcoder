const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

let edges = [];
for (let i = 0; i < M; i++) {
  let [u, v, w] = input[i + 1].split(' ').map(Number);
  u--;
  v--;
  edges.push([u, v, w]);
}

class UnionFind {
  constructor(n) {
    if (n <= 0) throw new RangeError(n);
    this.parent = Array.from({ length: n }, (_, i) => i); // parent[i] === i means root
    this.size = Array(n).fill(1);
  }

  find(x) {
    if (x < 0 || x >= this.parent.length) throw new RangeError(x);
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // route compression
    }
    return this.parent[x];
  }

  union(x, y) {
    let rx = this.find(x);
    let ry = this.find(y);
    if (rx === ry) return false;

    // union by size
    if (this.size[rx] < this.size[ry]) {
      [rx, ry] = [ry, rx];
    }

    this.parent[ry] = rx;
    this.size[rx] += this.size[ry];
    return true;
  }

  same(x, y) {
    return this.find(x) === this.find(y);
  }

  size(x) {
    return this.size[this.find(x)];
  }
}

let ans = 0;
for (let i = 30; i >= 0; i--) {
  const new_edges = [];
  const uf = new UnionFind(N);
  for (const e of edges) {
    const [u, v, w] = e;
    if (((w >> i) & 1) === 0) {
      new_edges.push(e);
      uf.union(u, v);
    }
  }
  if (uf.same(0, N - 1)) {
    edges = new_edges;
  } else {
    ans |= 1 << i;
  }
}
console.log(ans);
