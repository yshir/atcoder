const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

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

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

const D = [
  [-1, -1],
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
  [1, 1],
];

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const [ax, ay] = A[i];
    const [bx, by] = A[j];

    let ok = false;
    for (const [dx, dy] of D) {
      if (ax === bx + dx && ay === by + dy) ok = true;
    }
    if (ok) uf.union(i, j);
  }
}

const set = new Set();
for (let i = 0; i < N; i++) {
  set.add(uf.find(i));
}
console.log(set.size);
