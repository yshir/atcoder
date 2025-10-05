const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

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

const uf = new UnionFind(N);

let cnt = 0;
for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  if (uf.same(a, b)) {
    cnt++;
  } else {
    uf.union(a, b);
  }
}
console.log(cnt);
