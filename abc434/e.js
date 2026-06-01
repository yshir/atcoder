const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const xs = [];
const id = new Map();

const E = [];
for (let i = 0; i < N; i++) {
  const [x, r] = input[i + 1].split(' ').map(Number);
  const x1 = x - r;
  const x2 = x + r;
  for (const xn of [x1, x2]) {
    if (id.get(xn) === undefined) {
      xs.push(xn);
      id.set(xn, xs.length - 1);
    }
  }
  const id1 = id.get(x1);
  const id2 = id.get(x2);
  E[i] = [id1, id2];
}

class UnionFind {
  constructor(n) {
    if (n <= 0) throw new RangeError(n);
    this.parent = Array.from({ length: n }, (_, i) => i); // parent が自分自身の場合は root
    this.size_v = Array(n).fill(1);
    this.size_e = Array(n).fill(0);
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
    if (rx === ry) {
      this.size_e[rx] += 1;
      return false;
    }

    // union by size
    if (this.size_v[rx] < this.size_v[ry]) {
      [rx, ry] = [ry, rx];
    }

    this.parent[ry] = rx;
    this.size_v[rx] += this.size_v[ry];
    this.size_e[rx] += this.size_e[ry] + 1;
    return true;
  }

  same(x, y) {
    return this.find(x) === this.find(y);
  }

  get_size_v(x) {
    return this.size_v[this.find(x)];
  }

  get_size_e(x) {
    return this.size_e[this.find(x)];
  }
}

const uf = new UnionFind(xs.length);

for (let i = 0; i < N; i++) {
  const [id1, id2] = E[i];
  uf.union(id1, id2);
}

const map = {};
for (let i = 0; i < xs.length; i++) {
  map[uf.find(i)] = {
    e: uf.get_size_e(i),
    v: uf.get_size_v(i),
  };
}

let ans = 0;
for (const { e, v } of Object.values(map)) {
  ans += Math.min(e, v);
}
console.log(ans);
