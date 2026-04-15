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
