const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < M; i++) {
  let [u, v] = input[i + 1].split(' ').map(Number);
  u--;
  v--;
  A[i] = [u, v];
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

const uf = new UnionFind(N);
for (let i = 0; i < M; i++) {
  const [u, v] = A[i];
  uf.union(u, v);
}

const C = [];
for (let i = 0; i < N; i++) {
  C[i] = 0;
}
for (let i = 0; i < M; i++) {
  const [u, v] = A[i];
  C[u]++;
  C[v]++;
}

const B = new Map();
for (let i = 0; i < N; i++) {
  const p = uf.find(i);
  const v = B.get(p) || [0, 0];
  v[0]++;
  v[1] += C[i];
  B.set(p, v);
}

for (const [_, v] of B) {
  if (v[0] * 2 !== v[1]) {
    console.log('No');
    return;
  }
}
console.log('Yes');
