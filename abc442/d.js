const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

class FenwickTree {
  /**
   * @param {number} n - size
   */
  constructor(n = 0) {
    this._n = n;
    this.data = new Array(n).fill(0);
  }

  /**
   * Build Fenwick Tree from array
   * @param {number[]} arr - initial array
   * @returns {FenwickTree}
   */
  static from(arr) {
    const n = arr.length;
    const ft = new FenwickTree(n);
    for (let i = 0; i < n; i++) {
      ft.add(i, arr[i]);
    }
    return ft;
  }

  /**
   * Add x to position p
   * @param {number} p - position (0-indexed)
   * @param {number} x - value to add
   */
  add(p, x) {
    if (p < 0 || p >= this._n) {
      throw new Error(`Index out of bounds: p=${p}, n=${this._n}`);
    }
    p++;
    while (p <= this._n) {
      this.data[p - 1] += x;
      p += p & -p;
    }
  }

  /**
   * Return sum of range [l, r)
   * @param {number} l - left (0-indexed, inclusive)
   * @param {number} r - right (0-indexed, exclusive)
   * @returns {number} range sum
   */
  sum(l, r) {
    if (l < 0 || l > r || r > this._n) {
      throw new Error(`Invalid range: l=${l}, r=${r}, n=${this._n}`);
    }
    return this.#prefixSum(r) - this.#prefixSum(l);
  }

  /**
   * Return size
   * @returns {number}
   */
  size() {
    return this._n;
  }

  /**
   * Return sum of range [0, r) (private method)
   * @param {number} r - right (0-indexed, exclusive)
   * @returns {number} prefix sum
   */
  #prefixSum(r) {
    let s = 0;
    while (r > 0) {
      s += this.data[r - 1];
      r -= r & -r;
    }
    return s;
  }
}

const ft = FenwickTree.from(A);

for (let i = 0; i < Q; i++) {
  const query = input[i + 2].split(' ').map(Number);

  if (query[0] === 1) {
    const [, x] = query;
    const sub = A[x] - A[x - 1];
    [A[x], A[x - 1]] = [A[x - 1], A[x]];
    ft.add(x - 1, sub);
    ft.add(x, -sub);
  }
  if (query[0] === 2) {
    const [, l, r] = query;
    console.log(ft.sum(l - 1, r));
  }
}
