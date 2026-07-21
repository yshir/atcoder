const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);

const MOD = 998244353;

const B = [];
for (let i = 0; i < 1e6; i++) {
  B[i] = [];
  for (let d = 0; d < 10; d++) {
    B[i][d] = 0;
  }
}
for (let i = 0; i < 1e6; i++) {
  for (let d = 0; d < 10; d++) {
    if (i === 0) {
      B[i][d] = d;
    } else {
      B[i][d] = B[i - 1][d] * 10;
      B[i][d] %= MOD;
    }
  }
}

/**
 * Double-ended queue backed by a power-of-two ring buffer.
 *
 * - push / pop on both ends are O(1) amortized (grow doubles the buffer).
 * - Capacity is always a power of two, so index wrapping is a single
 *   `& mask` instead of `% length` — cheaper in hot loops.
 * - `head` points at the first element; `tail` points one past the last.
 *   When size === capacity the buffer is full and grows x2 on the next push.
 *
 * Note: for speed, pop/front/back/get do NOT bounds-check. Empty pops return
 * `undefined`; `get(i)` with i out of [0, size) reads stale/undefined slots.
 */
class Deque {
  /**
   * Construct an empty deque. - O(capacity)
   * @param {number} [capacity=16] Hint; rounded up to the next power of two.
   *
   * @example
   * const dq = new Deque();     // starts at capacity 16
   * const big = new Deque(100); // rounded up to 128
   */
  constructor(capacity = 16) {
    let cap = 1;
    while (cap < capacity) cap <<= 1; // round up to a power of two
    this.data = new Array(cap);
    this.mask = cap - 1; // cap is 2^k, so `i & mask` == `i % cap`
    this.head = 0; // index of the first element
    this.tail = 0; // index one past the last element
    this.size = 0;
  }

  /**
   * Append `v` to the back. - O(1) amortized
   * @param {*} v
   *
   * @example
   * const dq = new Deque();
   * dq.pushBack(1);
   * dq.pushBack(2);
   * dq.back(); // => 2
   */
  pushBack(v) {
    if (this.size === this.data.length) this._grow();
    this.data[this.tail] = v;
    this.tail = (this.tail + 1) & this.mask;
    this.size++;
  }

  /**
   * Prepend `v` to the front. - O(1) amortized
   * @param {*} v
   *
   * @example
   * const dq = new Deque();
   * dq.pushFront(1);
   * dq.pushFront(0);
   * dq.front(); // => 0
   */
  pushFront(v) {
    if (this.size === this.data.length) this._grow();
    this.head = (this.head - 1) & this.mask; // wraps past 0 to the top
    this.data[this.head] = v;
    this.size++;
  }

  /**
   * Remove and return the back element, or `undefined` if empty. - O(1)
   * @returns {*}
   *
   * @example
   * const dq = new Deque();
   * dq.pushBack(1);
   * dq.pushBack(2);
   * dq.popBack(); // => 2
   * dq.popBack(); // => 1
   * dq.popBack(); // => undefined (empty)
   */
  popBack() {
    if (this.size === 0) return undefined;
    this.tail = (this.tail - 1) & this.mask;
    const v = this.data[this.tail];
    this.size--;
    return v;
  }

  /**
   * Remove and return the front element, or `undefined` if empty. - O(1)
   * @returns {*}
   *
   * @example
   * const dq = new Deque();
   * dq.pushBack(1);
   * dq.pushBack(2);
   * dq.popFront(); // => 1
   * dq.popFront(); // => 2
   * dq.popFront(); // => undefined (empty)
   */
  popFront() {
    if (this.size === 0) return undefined;
    const v = this.data[this.head];
    this.head = (this.head + 1) & this.mask;
    this.size--;
    return v;
  }

  /**
   * Peek the front element without removing it, or `undefined` if empty. - O(1)
   * @returns {*}
   *
   * @example
   * const dq = new Deque();
   * dq.pushBack('a');
   * dq.pushBack('b');
   * dq.front(); // => 'a'
   */
  front() {
    return this.size === 0 ? undefined : this.data[this.head];
  }

  /**
   * Peek the back element without removing it, or `undefined` if empty. - O(1)
   * @returns {*}
   *
   * @example
   * const dq = new Deque();
   * dq.pushBack('a');
   * dq.pushBack('b');
   * dq.back(); // => 'b'
   */
  back() {
    return this.size === 0 ? undefined : this.data[(this.tail - 1) & this.mask];
  }

  /**
   * Random access by logical index, 0-indexed from the front. - O(1)
   * No bounds check: only valid for 0 <= i < size.
   * @param {number} i
   * @returns {*}
   *
   * @example
   * const dq = new Deque();
   * for (const x of [10, 20, 30]) dq.pushBack(x);
   * dq.get(0); // => 10
   * dq.get(2); // => 30
   */
  get(i) {
    return this.data[(this.head + i) & this.mask];
  }

  /**
   * Whether the deque has no elements. - O(1)
   * @returns {boolean}
   *
   * @example
   * const dq = new Deque();
   * dq.empty(); // => true
   * dq.pushBack(1);
   * dq.empty(); // => false
   */
  empty() {
    return this.size === 0;
  }

  /**
   * Iterate elements from front to back. - O(N) for a full traversal
   * @returns {Iterator<*>}
   *
   * @example
   * const dq = new Deque();
   * for (const x of [1, 2, 3]) dq.pushBack(x);
   * [...dq];            // => [1, 2, 3]
   * for (const x of dq) console.log(x); // 1, 2, 3
   */
  *[Symbol.iterator]() {
    for (let i = 0; i < this.size; i++) yield this.data[(this.head + i) & this.mask];
  }

  /**
   * Double the buffer and re-pack elements starting at index 0. - O(N)
   * Called automatically when the buffer is full; not meant to be used directly.
   */
  _grow() {
    const newCap = this.data.length << 1;
    const nd = new Array(newCap);
    // Copy in logical order so the new buffer starts clean at head = 0.
    for (let i = 0; i < this.size; i++) {
      nd[i] = this.data[(this.head + i) & this.mask];
    }
    this.data = nd;
    this.mask = newCap - 1;
    this.head = 0;
    this.tail = this.size;
  }
}

const dq = new Deque();
dq.pushBack(1);
let ans = 1;

for (let i = 0; i < Q; i++) {
  const [a, x] = input[i + 1].split(' ').map(Number);
  if (a === 1) {
    dq.pushBack(x);
    ans = ans * 10 + x;
    ans %= MOD;
  }
  if (a === 2) {
    const b = dq.popFront();
    ans -= B[dq.size][b];
    ans += MOD;
    ans %= MOD;
  }
  if (a === 3) {
    console.log(ans);
  }
}
