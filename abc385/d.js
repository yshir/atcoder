let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, Sx, Sy] = input[line++].split(' ').map(Number);

const P = [];
for (let i = 0; i < N; i++) {
  P[i] = input[line++].split(' ').map(Number);
}

const Q = [];
for (let i = 0; i < M; i++) {
  const [d, c] = input[line++].split(' ');
  Q[i] = [d, Number(c)];
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
      const useLeft = node.right === null || (node.left !== null && node.left.priority > node.right.priority);
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

const X_map = new Map();
const Y_map = new Map();

for (let i = 0; i < N; i++) {
  const [xi, yi] = P[i];

  const X_tree = X_map.get(xi) || new Treap();
  const Y_tree = Y_map.get(yi) || new Treap();

  X_tree.insert(yi);
  Y_tree.insert(xi);

  X_map.set(xi, X_tree);
  Y_map.set(yi, Y_tree);
}

let cur_x = Sx;
let cur_y = Sy;
let cnt = 0;

for (let i = 0; i < M; i++) {
  const [d, c] = Q[i];

  let prev_x = cur_x;
  let prev_y = cur_y;

  switch (d) {
    case 'U':
      cur_y += c;
      break;
    case 'D':
      cur_y -= c;
      break;
    case 'L':
      cur_x -= c;
      break;
    case 'R':
      cur_x += c;
      break;
  }

  if (d === 'U' || d === 'D') {
    const src_y = Math.min(cur_y, prev_y);
    const dst_y = Math.max(cur_y, prev_y);
    const tree = X_map.get(cur_x);
    if (!tree) continue;
    while (1) {
      const idx = tree.rank(src_y);
      if (idx === tree.size) {
        break;
      }
      const val = tree.kth(idx);
      if (val > dst_y) {
        break;
      }
      tree.delete(val);
      Y_map.get(val).delete(cur_x);
      cnt++;
    }
  } else {
    const src_x = Math.min(cur_x, prev_x);
    const dst_x = Math.max(cur_x, prev_x);
    const tree = Y_map.get(cur_y);
    if (!tree) continue;
    while (1) {
      const idx = tree.rank(src_x);
      if (idx === tree.size) {
        break;
      }
      const val = tree.kth(idx);
      if (val > dst_x) {
        break;
      }
      tree.delete(val);
      X_map.get(val).delete(cur_y);
      cnt++;
    }
  }
}

console.log([cur_x, cur_y, cnt].join(' '));
