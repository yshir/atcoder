const chunk = (a, size) =>
  Array.from(
    { length: Math.ceil(a.length / size) }, //
    (_, i) => a.slice(i * size, i * size + size),
  );

const isqrt = (num) => {
  if (num < 0n) throw new RangeError();
  if (num < 2n) return num;
  let x = num / 2n;
  while (true) {
    const y = (x + num / x) / 2n;
    if (y >= x) return x;
    x = y;
  }
};

const lower_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] < n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

const upper_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] <= n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

function permutations(iterable, k = [...iterable].length) {
  const items = [...iterable];
  const used = new Array(items.length).fill(false);
  const path = [];
  const result = [];

  function dfs() {
    if (path.length === k) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < items.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(items[i]);
      dfs();
      path.pop(); // backtrack
      used[i] = false;
    }
  }

  dfs();
  return result;
}

function distinct_permutations(iterable) {
  const items = [...iterable].sort(); // 重複除去ロジックのためソート
  const used = new Array(items.length).fill(false);
  const path = [];
  const result = [];

  function dfs() {
    if (path.length === items.length) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < items.length; i++) {
      if (used[i]) continue;
      // 直前と同じ値だが直前が未使用ならスキップ（重複生成を防止）
      if (i > 0 && items[i] === items[i - 1] && !used[i - 1]) continue;
      used[i] = true;
      path.push(items[i]);
      dfs();
      path.pop(); // backtrack
      used[i] = false;
    }
  }

  dfs();
  return result;
}

const prime_sieve = (x) => {
  const composite = new Uint8Array(x + 1);

  // even
  for (let i = 4; i <= x; i += 2) {
    composite[i] = 1;
  }
  // odd
  for (let i = 3; i * i <= x; i += 2) {
    if (!composite[i]) {
      for (let j = i * i; j <= x; j += i) {
        composite[j] = 1;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= x; i++) {
    if (!composite[i]) primes.push(i);
  }
  return primes;
};

class Queue {
  #stackPush = [];
  #stackPop = [];

  enqueue(value) {
    this.#stackPush.push(value);
  }

  dequeue() {
    if (this.#stackPop.length === 0) {
      while (this.#stackPush.length > 0) {
        this.#stackPop.push(this.#stackPush.pop());
      }
    }
    return this.#stackPop.pop();
  }

  empty() {
    return this.#stackPush.length === 0 && this.#stackPop.length === 0;
  }
}

class PriorityQueue {
  #heap = [];

  enqueue(priority, value) {
    this.#heap.push({ priority, value });
    this.#bubbleUp();
  }

  dequeue() {
    if (this.empty()) return null;
    const top = this.#heap[0];
    const end = this.#heap.pop();
    if (this.#heap.length > 0) {
      this.#heap[0] = end;
      this.#sinkDown();
    }
    return top.value;
  }

  top() {
    return this.empty() ? null : this.#heap[0].value;
  }

  size() {
    return this.#heap.length;
  }

  empty() {
    return this.#heap.length === 0;
  }

  #bubbleUp() {
    let idx = this.#heap.length - 1;
    const element = this.#heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.#heap[parentIdx];
      if (element.priority <= parent.priority) break;
      this.#heap[parentIdx] = element;
      this.#heap[idx] = parent;
      idx = parentIdx;
    }
  }

  #sinkDown() {
    let idx = 0;
    const length = this.#heap.length;
    const element = this.#heap[0];
    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length) {
        const left = this.#heap[leftIdx];
        if (left.priority > element.priority) swap = leftIdx;
      }

      if (rightIdx < length) {
        const right = this.#heap[rightIdx];
        if (
          (swap === null && right.priority > element.priority) ||
          (swap !== null && right.priority > this.#heap[swap].priority)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;
      this.#heap[idx] = this.#heap[swap];
      this.#heap[swap] = element;
      idx = swap;
    }
  }
}

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

class AVLTree {
  #Node = class {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
      this.height = 1;
      this.size = 1;
    }
  };

  constructor(
    cmp = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    },
  ) {
    this.root = null;
    this.cmp = cmp;
  }

  get height() {
    return this.#getHeight(this.root);
  }

  get size() {
    return this.#getSize(this.root);
  }

  insert(key) {
    this.root = this.#insert(this.root, key);
  }

  delete(key) {
    this.root = this.#delete(this.root, key);
  }

  search(key) {
    let cur = this.root;
    while (cur) {
      const cmpResult = this.cmp(key, cur.key);
      if (cmpResult < 0) {
        cur = cur.left;
      } else if (cmpResult > 0) {
        cur = cur.right;
      } else {
        return true; // Key found
      }
    }
    return false; // Key not found
  }

  min() {
    if (!this.root) return null;
    return this.#getMinNode(this.root).key;
  }

  max() {
    if (!this.root) return null;
    return this.#getMaxNode(this.root).key;
  }

  shift() {
    if (!this.root) return null;
    const min = this.min();
    this.delete(min);
    return min;
  }

  pop() {
    if (!this.root) return null;
    const max = this.max();
    this.delete(max);
    return max;
  }

  at(index) {
    let cur = this.root;
    while (cur) {
      const leftSize = this.#getSize(cur.left);
      if (index < leftSize) {
        cur = cur.left;
      } else if (index > leftSize) {
        index -= leftSize + 1;
        cur = cur.right;
      } else {
        return cur.key; // Index found
      }
    }
    return null; // Index out of bounds
  }

  indexOf(key) {
    let cur = this.root;
    let index = 0;
    while (cur) {
      const cmpResult = this.cmp(key, cur.key);
      if (cmpResult < 0) {
        cur = cur.left;
      } else if (cmpResult > 0) {
        index += 1 + this.#getSize(cur.left);
        cur = cur.right;
      } else {
        return index + this.#getSize(cur.left); // Key found
      }
    }
    return -1; // Key not found
  }

  lowerBound(key) {
    let cur = this.root;
    let result = null;
    while (cur) {
      const cmpResult = this.cmp(key, cur.key);
      if (cmpResult <= 0) {
        result = cur.key; // Potential lower bound
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return result;
  }

  upperBound(key) {
    let cur = this.root;
    let result = null;
    while (cur) {
      const cmpResult = this.cmp(key, cur.key);
      if (cmpResult < 0) {
        result = cur.key; // Potential upper bound
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return result;
  }

  countRange(low, high) {
    return this.#countUpperBound(high) - this.#countLowerBound(low);
  }

  rangeQuery(low, high) {
    const result = [];
    this.#rangeQuery(this.root, low, high, result);
    return result;
  }

  toSortedArray() {
    const result = [];
    this.#inOrderTraversal(this.root, result);
    return result;
  }

  #insert(node, key) {
    if (!node) return new this.#Node(key);

    const cmpResult = this.cmp(key, node.key);
    if (cmpResult < 0) {
      node.left = this.#insert(node.left, key);
    } else if (cmpResult > 0) {
      node.right = this.#insert(node.right, key);
    } else {
      return node; // Duplicate keys are not allowed
    }

    node.height =
      1 + Math.max(this.#getHeight(node.left), this.#getHeight(node.right));
    node.size = 1 + this.#getSize(node.left) + this.#getSize(node.right);

    return this.#balance(node);
  }

  #delete(node, key) {
    if (!node) return node;

    const cmpResult = this.cmp(key, node.key);
    if (cmpResult < 0) {
      node.left = this.#delete(node.left, key);
    } else if (cmpResult > 0) {
      node.right = this.#delete(node.right, key);
    } else {
      if (!node.left || !node.right) {
        return node.left || node.right;
      }

      const temp = this.#getMinNode(node.right);
      node.key = temp.key;
      node.right = this.#delete(node.right, temp.key);
    }

    node.height =
      1 + Math.max(this.#getHeight(node.left), this.#getHeight(node.right));
    node.size = 1 + this.#getSize(node.left) + this.#getSize(node.right);

    return this.#balance(node);
  }

  #balance(node) {
    const balanceFactor = this.#getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (this.#getBalanceFactor(node.left) < 0) {
        node.left = this.#rotateLeft(node.left);
      }
      return this.#rotateRight(node);
    }

    if (balanceFactor < -1) {
      if (this.#getBalanceFactor(node.right) > 0) {
        node.right = this.#rotateRight(node.right);
      }
      return this.#rotateLeft(node);
    }

    return node;
  }

  #rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height = 1 + Math.max(this.#getHeight(z.left), this.#getHeight(z.right));
    y.height = 1 + Math.max(this.#getHeight(y.left), this.#getHeight(y.right));

    z.size = 1 + this.#getSize(z.left) + this.#getSize(z.right);
    y.size = 1 + this.#getSize(y.left) + this.#getSize(y.right);

    return y;
  }

  #rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    z.height = 1 + Math.max(this.#getHeight(z.left), this.#getHeight(z.right));
    y.height = 1 + Math.max(this.#getHeight(y.left), this.#getHeight(y.right));

    z.size = 1 + this.#getSize(z.left) + this.#getSize(z.right);
    y.size = 1 + this.#getSize(y.left) + this.#getSize(y.right);

    return y;
  }

  #getHeight(node) {
    return node ? node.height : 0;
  }

  #getSize(node) {
    return node ? node.size : 0;
  }

  #getBalanceFactor(node) {
    return node ? this.#getHeight(node.left) - this.#getHeight(node.right) : 0;
  }

  #getMinNode(node) {
    let cur = node;
    while (cur.left) {
      cur = cur.left;
    }
    return cur;
  }

  #getMaxNode(node) {
    let cur = node;
    while (cur.right) {
      cur = cur.right;
    }
    return cur;
  }

  #inOrderTraversal(node, result) {
    if (node) {
      this.#inOrderTraversal(node.left, result);
      result.push(node.key);
      this.#inOrderTraversal(node.right, result);
    }
  }

  #rangeQuery(node, low, high, result) {
    if (!node) return;

    const cmpLow = this.cmp(low, node.key);
    const cmpHigh = this.cmp(high, node.key);

    if (cmpLow < 0) {
      this.#rangeQuery(node.left, low, high, result);
    }
    if (cmpLow <= 0 && cmpHigh >= 0) {
      result.push(node.key);
    }
    if (cmpHigh > 0) {
      this.#rangeQuery(node.right, low, high, result);
    }
  }

  #countLowerBound(key) {
    let cur = this.root;
    let count = 0;
    while (cur) {
      const cmp = this.cmp(key, cur.key);
      if (cmp <= 0) {
        cur = cur.left;
      } else {
        count += 1 + this.#getSize(cur.left);
        cur = cur.right;
      }
    }
    return count;
  }

  #countUpperBound(key) {
    let cur = this.root;
    let count = 0;
    while (cur) {
      const cmp = this.cmp(key, cur.key);
      if (cmp < 0) {
        cur = cur.left;
      } else {
        count += 1 + this.#getSize(cur.left);
        cur = cur.right;
      }
    }
    return count;
  }
}

/**
 * Non-recursive Treap (rotation-based, parent-pointer style).
 *
 * - insert / delete / has are O(log n) expected, all implemented as loops.
 * - Each node stores `size` so k-th / rank are O(log n).
 * - In-order iteration uses an explicit stack (no recursion).
 *
 * Why parent pointers:
 *   With parent links, "bubble up after insert" and "sink down before delete"
 *   can both be written as plain `while` loops. No call stack, no explicit
 *   path stack — the tree itself remembers the path.
 */
class Treap {
  /**
   * Construct an empty treap. - O(1)
   * @param {(a:any,b:any)=>number} [compare] Comparator. Defaults to `<` / `>`.
   */
  constructor(compare) {
    this.root = null;
    this.compare = compare || ((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  }

  /**
   * Number of entries in the treap. - O(1)
   * @returns {number}
   *
   * @example
   * const t = new Treap();
   * t.insert(1);
   * t.insert(2);
   * t.size; // => 2
   */
  get size() {
    return this.#sz(this.root);
  }

  /**
   * Whether `key` exists in the treap. - O(log N) expected
   * @param {*} key
   * @returns {boolean}
   *
   * @example
   * const t = new Treap();
   * t.insert('x');
   * t.has('x'); // => true
   * t.has('y'); // => false
   */
  has(key) {
    return this.#find(key) !== null;
  }

  /**
   * Insert a key. - O(log N) expected
   * Returns `true` if the key was newly added, `false` if it already
   * existed (in which case the treap is unchanged).
   * @param {*} key
   * @returns {boolean}
   *
   * @example
   * const t = new Treap();
   * t.insert(10); // => true
   * t.insert(10); // => false (already present)
   * t.size;       // => 1
   */
  insert(key) {
    if (this.root === null) {
      this.root = new Treap.#Node(key);
      return true;
    }
    // 1) Walk down to a leaf slot.
    let cur = this.root;
    let parent = null;
    let goLeft = false;
    while (cur !== null) {
      const c = this.compare(key, cur.key);
      if (c === 0) return false; // already present
      parent = cur;
      if (c < 0) {
        cur = cur.left;
        goLeft = true;
      } else {
        cur = cur.right;
        goLeft = false;
      }
    }
    // 2) Attach as a leaf.
    const node = new Treap.#Node(key);
    node.parent = parent;
    if (goLeft) parent.left = node;
    else parent.right = node;

    // 3) Bubble the new node's size up through its ancestors.
    for (let p = parent; p !== null; p = p.parent) this.#update(p);

    // 4) Restore the heap property by rotating upward (non-recursive).
    //    Rotations preserve subtree size, so ancestors above stay valid.
    while (node.parent !== null && node.parent.priority < node.priority) {
      this.#rotateUp(node);
    }
    return true;
  }

  /**
   * Remove the entry with the given key. - O(log N) expected
   * Returns `true` if something was removed, `false` if the key was not
   * present.
   * @param {*} key
   * @returns {boolean}
   *
   * @example
   * const t = new Treap();
   * t.insert(1);
   * t.delete(1); // => true
   * t.delete(1); // => false (already gone)
   */
  delete(key) {
    const node = this.#find(key);
    if (node === null) return false;

    // 1) Sink the node down to a leaf by repeatedly rotating up the child
    //    with the larger priority. This keeps the heap property intact.
    while (node.left !== null || node.right !== null) {
      const useLeft =
        node.right === null ||
        (node.left !== null && node.left.priority > node.right.priority);
      this.#rotateUp(useLeft ? node.left : node.right);
    }

    // 2) Detach the now-leaf node and refresh ancestor sizes.
    const p = node.parent;
    if (p === null) {
      this.root = null;
    } else {
      if (p.left === node) p.left = null;
      else p.right = null;
      for (let q = p; q !== null; q = q.parent) this.#update(q);
    }
    node.parent = null;
    return true;
  }

  /**
   * Return the k-th smallest key (0-indexed), or `undefined` if out of range. - O(log N) expected
   * @param {number} k
   * @returns {*}
   *
   * @example
   * const t = new Treap();
   * for (const x of [30, 10, 20]) t.insert(x);
   * t.kth(0); // => 10
   * t.kth(1); // => 20
   * t.kth(2); // => 30
   * t.kth(3); // => undefined
   */
  kth(k) {
    if (k < 0 || k >= this.#sz(this.root)) return undefined;
    let cur = this.root;
    for (;;) {
      const l = cur.left ? cur.left.size : 0;
      if (k === l) return cur.key;
      if (k < l) {
        cur = cur.left;
      } else {
        k -= l + 1;
        cur = cur.right;
      }
    }
  }

  /**
   * Number of keys strictly less than `key` (i.e. lower_bound index). - O(log N) expected
   * @param {*} key
   * @returns {number}
   *
   * @example
   * const t = new Treap();
   * for (const x of [10, 20, 30]) t.insert(x);
   * t.rank(10); // => 0  (nothing is < 10)
   * t.rank(25); // => 2  (10 and 20 are < 25)
   * t.rank(99); // => 3
   */
  rank(key) {
    let cur = this.root;
    let r = 0;
    while (cur !== null) {
      if (this.compare(key, cur.key) <= 0) {
        cur = cur.left;
      } else {
        r += (cur.left ? cur.left.size : 0) + 1;
        cur = cur.right;
      }
    }
    return r;
  }

  /**
   * Smallest key, or `undefined` if empty. - O(log N) expected
   * @returns {*}
   *
   * @example
   * const t = new Treap();
   * for (const x of [5, 1, 9]) t.insert(x);
   * t.min(); // => 1
   */
  min() {
    if (this.root === null) return undefined;
    let cur = this.root;
    while (cur.left !== null) cur = cur.left;
    return cur.key;
  }

  /**
   * Largest key, or `undefined` if empty. - O(log N) expected
   * @returns {*}
   *
   * @example
   * const t = new Treap();
   * for (const x of [5, 1, 9]) t.insert(x);
   * t.max(); // => 9
   */
  max() {
    if (this.root === null) return undefined;
    let cur = this.root;
    while (cur.right !== null) cur = cur.right;
    return cur.key;
  }

  /**
   * Remove every entry. - O(1)
   *
   * @example
   * const t = new Treap();
   * t.insert(1);
   * t.clear();
   * t.size; // => 0
   */
  clear() {
    this.root = null;
  }

  /**
   * Iterate keys in ascending order. - O(N) for a full traversal
   * Uses an explicit stack internally — no recursion.
   * @returns {Iterator<*>}
   *
   * @example
   * const t = new Treap();
   * for (const x of [3, 1, 2]) t.insert(x);
   * for (const k of t) console.log(k);
   * // 1
   * // 2
   * // 3
   */
  *[Symbol.iterator]() {
    const stack = [];
    let cur = this.root;
    while (cur !== null || stack.length > 0) {
      while (cur !== null) {
        stack.push(cur);
        cur = cur.left;
      }
      cur = stack.pop();
      yield cur.key;
      cur = cur.right;
    }
  }

  /**
   * Array of keys in ascending order. - O(N)
   * @returns {Array}
   *
   * @example
   * const t = new Treap();
   * for (const x of [3, 1, 2]) t.insert(x);
   * t.toArray(); // => [1, 2, 3]
   */
  toArray() {
    return Array.from(this);
  }

  // Internal node. Never leaves the class.
  static #Node = class {
    constructor(key) {
      this.key = key;
      this.priority = Math.random();
      this.left = null;
      this.right = null;
      this.parent = null;
      this.size = 1;
    }
  };

  /** Look up the internal node for `key`, or `null`. */
  #find(key) {
    let cur = this.root;
    while (cur !== null) {
      const c = this.compare(key, cur.key);
      if (c === 0) return cur;
      cur = c < 0 ? cur.left : cur.right;
    }
    return null;
  }

  /** Size of a possibly-null node. */
  #sz(n) {
    return n === null ? 0 : n.size;
  }

  /** Recompute `size` of a single node from its children. */
  #update(n) {
    n.size = 1 + (n.left ? n.left.size : 0) + (n.right ? n.right.size : 0);
  }

  /**
   * Rotate node `x` up by one level, taking its parent's slot.
   * Handles both left-child (right rotation) and right-child (left rotation)
   * cases. The total size of the rotated subtree is preserved, so ancestors
   * above `x` do NOT need their `size` refreshed.
   */
  #rotateUp(x) {
    const p = x.parent;
    const g = p.parent;
    if (p.left === x) {
      // x is a left child → right rotation
      const b = x.right;
      p.left = b;
      if (b !== null) b.parent = p;
      x.right = p;
    } else {
      // x is a right child → left rotation
      const b = x.left;
      p.right = b;
      if (b !== null) b.parent = p;
      x.left = p;
    }
    p.parent = x;
    x.parent = g;
    if (g === null) this.root = x;
    else if (g.left === p) g.left = x;
    else g.right = x;
    // Update the lower node first, then the higher one.
    this.#update(p);
    this.#update(x);
  }
}

/**
 * Computes the Z-array of a string in O(n) time.
 *
 * @param {string} s - The input string to process.
 * @returns {number[]} The Z-array of `s`, where `z[i]` is the length of the
 *   longest substring starting at index `i` that is also a prefix of `s`.
 *
 * @example
 * z_algorithm("aabcaabxaaaz"); // => [12, 1, 0, 0, 3, 1, 0, 0, 2, 2, 1, 0]
 */
function z_algorithm(s) {
  const n = s.length;
  const z = new Array(n).fill(0);
  z[0] = n;
  let l = 0,
    r = 0;
  for (let i = 1; i < n; i++) {
    if (i < r) {
      z[i] = Math.min(r - i, z[i - l]);
    }
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
      z[i]++;
    }
    if (i + z[i] > r) {
      l = i;
      r = i + z[i];
    }
  }
  return z;
}
