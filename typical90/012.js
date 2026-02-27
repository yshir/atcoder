const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const [Q] = input[1].split(' ').map(Number);

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
}

const N = H * W;
const A = [];
for (let i = 0; i < H; i++) {
  A[i] = [];
  for (let j = 0; j < W; j++) {
    A[i][j] = 0;
  }
}

const uf = new UnionFind(N);
for (let i = 0; i < Q; i++) {
  const query = input[i + 2].split(' ').map(Number);
  if (query[0] === 1) {
    const [, ni, nj] = query.map((x) => x - 1);
    A[ni][nj] = 1;
    for (const [di, dj] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]) {
      const ki = ni + di;
      const kj = nj + dj;
      if (ki < 0 || kj < 0 || ki >= H || kj >= W || A[ki][kj] !== 1) {
        continue;
      }

      const idx1 = ni * W + nj;
      const idx2 = ki * W + kj;
      uf.union(idx1, idx2);
    }
  }
  if (query[0] === 2) {
    const [, si, sj, ti, tj] = query.map((x) => x - 1);
    const idx1 = si * W + sj;
    const idx2 = ti * W + tj;
    console.log(A[si][sj] === 1 && A[ti][tj] === 1 && uf.same(idx1, idx2) ? 'Yes' : 'No');
  }
}
