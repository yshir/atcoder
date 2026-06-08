const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

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
   * Set position p to value x
   * @param {number} p - position (0-indexed)
   * @param {number} x - value to set
   */
  set(p, x) {
    if (p < 0 || p >= this._n) {
      throw new Error(`Index out of bounds: p=${p}, n=${this._n}`);
    }
    const current = this.sum(p, p + 1);
    this.add(p, x - current);
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

const rt = new FenwickTree(Q + 2);
const ct = new FenwickTree(Q + 2);

rt.add(0, N);
ct.add(1, N);

const R = [];
const C = [];
for (let i = 0; i < N; i++) {
  R[i] = 0;
  C[i] = 1;
}

let cur = 0n;

for (let i = 0; i < Q; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  b--;

  const t = i + 2;

  if (a === 1) {
    cur += BigInt(ct.sum(R[b] + 1, t));
    rt.add(R[b], -1);
    rt.add(t, 1);
    R[b] = t;
  }
  if (a === 2) {
    cur -= BigInt(rt.sum(C[b] + 1, t));
    ct.add(C[b], -1);
    ct.add(t, 1);
    C[b] = t;
  }

  console.log(cur.toString());
}
