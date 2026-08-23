const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

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
const color = new Uint8Array(N);
const cnt = new Uint32Array(N);

for (let i = 0; i < Q; i++) {
  let [z, u, v] = input[i + 1].split(' ').map(Number);
  u--;
  v--;

  if (z === 1) {
    const p1 = uf.find(u);
    const p2 = uf.find(v);
    if (p1 !== p2) {
      uf.union(u, v);
      const p3 = uf.find(u);
      const p4 = p3 === p1 ? p2 : p1;
      cnt[p3] += cnt[p4];
    }
  }
  if (z === 2) {
    const delta = color[u] ? -1 : 1;
    color[u] = color[u] ? 0 : 1;
    cnt[uf.find(u)] += delta;
  }
  if (z === 3) {
    console.log(cnt[uf.find(u)] > 0 ? 'Yes' : 'No');
  }
}
