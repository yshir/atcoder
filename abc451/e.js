const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = [];
  for (let j = 0; j < N; j++) {
    A[i][j] = 0;
  }
}
const E = [];
for (let i = 0; i < N - 1; i++) {
  let j = i + 1;
  for (const v of input[i + 1].split(' ').map(Number)) {
    A[i][j] = v;
    A[j][i] = v;
    E.push({ i, j, v });
    j++;
  }
}
E.sort((a, b) => a.v - b.v);

class UnionFind {
  constructor(n) {
    if (n <= 0) throw new RangeError(n);
    this.parent = Array.from({ length: n }, (_, i) => i); // parent が自分自身の場合は root
    this.size = Array(n).fill(1);
  }

  find(x) {
    if (x < 0 || x >= this.parent.length) throw new RangeError(x);
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // 経路圧縮
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

const G = [];
for (let i = 0; i < N; i++) G[i] = [];

const uf = new UnionFind(N);
for (const a of E) {
  const { i, j, v } = a;
  if (!uf.same(i, j)) {
    uf.union(i, j);
    G[i].push([j, v]);
    G[j].push([i, v]);
  }
}

const dfs = (i) => {
  const seen = new Set();
  const f = (j, p = 0) => {
    if (seen.has(j)) return true;
    seen.add(j);
    if (A[i][j] !== p) return false;
    for (const [k, v] of G[j]) {
      if (!f(k, p + v)) return false;
    }
    return true;
  };
  return f(i);
};

for (let i = 0; i < N; i++) {
  if (!dfs(i)) {
    console.log('No');
    return;
  }
}

console.log('Yes');
