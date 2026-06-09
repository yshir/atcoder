const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [W, N] = input[0].split(' ').map(Number);

/**
 * Non-recursive Lazy Segment Tree (iterative, bottom-up style).
 *
 * Required algebra (an "acted monoid"):
 *   - op(a, b)          associative fold of two values; e is its identity.
 *   - mapping(f, x)     apply update f to a node value x.
 *   - composition(f, g) the update equal to "g first, then f".
 *   - id                the no-op update: mapping(id, x) === x.
 *   Compatibility law:  mapping(f, op(a, b)) === op(mapping(f,a), mapping(f,b))
 *
 * @example
 * // Range add + range sum: length is embedded in the value as {sum, len}.
 * const st = new LazySegmentTree(
 *   [1, 2, 3, 4, 5].map(v => ({ sum: v, len: 1 })),
 *   (a, b) => ({ sum: a.sum + b.sum, len: a.len + b.len }),
 *   { sum: 0, len: 0 },
 *   (f, x) => ({ sum: x.sum + f * x.len, len: x.len }), // add f to each leaf
 *   (f, g) => f + g,                                    // adds stack up
 *   0                                                   // adding 0 is a no-op
 * );
 * st.applyRange(1, 4, 10);  // a = [1, 12, 13, 14, 5]
 * st.prod(0, 5).sum;        // => 45
 */
class LazySegmentTree {
  /**
   * Construct a lazy segment tree from a length or an initial array. - O(n)
   * @param {number|Array} nOrArray Number of elements (all initialized to
   *   `e`), or an initial array.
   * @param {(a:any,b:any)=>any} op Associative binary operation on values.
   * @param {*} e Identity element of `op`.
   * @param {(f:any,x:any)=>any} mapping Apply update `f` to value `x`.
   * @param {(f:any,g:any)=>any} composition Compose updates: result acts as
   *   "apply `g`, then apply `f`".
   * @param {*} id Identity update (the no-op).
   *
   * @example
   * // Range assign + range min
   * const st = new LazySegmentTree(
   *   [5, 3, 8, 1],
   *   Math.min, Infinity,
   *   (f, x) => (f === null ? x : f),    // null = "no assignment pending"
   *   (f, g) => (f === null ? g : f),    // the newer assignment wins
   *   null
   * );
   */
  constructor(nOrArray, op, e, mapping, composition, id) {
    this.op = op;
    this.e = e;
    this.mapping = mapping;
    this.composition = composition;
    this.id = id;

    let initial;
    if (Array.isArray(nOrArray)) {
      initial = nOrArray;
      this.#n = nOrArray.length;
    } else {
      this.#n = nOrArray;
      initial = null; // every leaf starts at `e`; no need to materialize
    }

    // Round the leaf count up to the next power of two so that every
    // internal node has exactly two children and index math stays trivial.
    this.#size = 1;
    this.#log = 0;
    while (this.#size < this.#n) {
      this.#size <<= 1;
      this.#log++;
    }

    this.#data = new Array(2 * this.#size).fill(e);
    // Only internal nodes (indices 1..size-1) can hold a pending tag;
    // a leaf has nothing below it to defer to.
    this.#lazy = new Array(this.#size).fill(id);

    if (initial !== null) {
      // 1) Place the initial values at the leaves.
      for (let i = 0; i < this.#n; i++) this.#data[this.#size + i] = initial[i];
      // 2) Build internal nodes bottom-up; each is the op of its children.
      for (let i = this.#size - 1; i >= 1; i--) this.#pull(i);
    }
  }

  /**
   * Number of elements (the logical length, not the padded size). - O(1)
   * @returns {number}
   *
   * @example
   * const st = new LazySegmentTree(5, Math.min, Infinity, (f, x) => x, (f, g) => f, null);
   * st.length; // => 5
   */
  get length() {
    return this.#n;
  }

  /**
   * Assign a[p] = x (point update). - O(log n)
   * Throws RangeError if `p` is out of range.
   * @param {number} p 0-indexed position.
   * @param {*} x New value.
   *
   * @example
   * const st = new LazySegmentTree([1, 2, 3], Math.min, Infinity,
   *   (f, x) => x + f, (f, g) => f + g, 0);
   * st.set(1, 10);
   * st.allProd(); // => 1  (min of 1, 10, 3)
   */
  set(p, x) {
    if (p < 0 || p >= this.#n) throw new RangeError(`index ${p} out of range`);
    p += this.#size;
    // 1) Flush pending tags on the root→leaf path so the leaf is current.
    for (let i = this.#log; i >= 1; i--) this.#push(p >> i);
    // 2) Overwrite the leaf.
    this.#data[p] = x;
    // 3) Recompute every ancestor by walking the parent chain to the root.
    for (let i = 1; i <= this.#log; i++) this.#pull(p >> i);
  }

  /**
   * Read a[p]. - O(log n)
   * Throws RangeError if `p` is out of range.
   * @param {number} p 0-indexed position.
   * @returns {*}
   *
   * @example
   * const st = new LazySegmentTree([7, 8, 9], Math.max, -Infinity,
   *   (f, x) => x + f, (f, g) => f + g, 0);
   * st.applyRange(0, 3, 5);
   * st.get(2); // => 14
   */
  get(p) {
    if (p < 0 || p >= this.#n) throw new RangeError(`index ${p} out of range`);
    p += this.#size;
    // The leaf may be stale: flush tags down the root→leaf path first.
    for (let i = this.#log; i >= 1; i--) this.#push(p >> i);
    return this.#data[p];
  }

  /**
   * Fold of the half-open range [l, r). Returns `e` when l === r. - O(log n)
   * Throws RangeError if the range is invalid.
   * @param {number} l Inclusive left bound.
   * @param {number} r Exclusive right bound.
   * @returns {*}
   *
   * @example
   * const st = new LazySegmentTree([1, 2, 3, 4, 5], Math.min, Infinity,
   *   (f, x) => x + f, (f, g) => f + g, 0);
   * st.prod(1, 4); // => 2  (min of 2, 3, 4)
   * st.prod(2, 2); // => Infinity  (empty range yields the identity)
   */
  prod(l, r) {
    if (l < 0 || r > this.#n || l > r) {
      throw new RangeError(`invalid range [${l}, ${r})`);
    }
    if (l === r) return this.e;

    l += this.#size;
    r += this.#size;

    // 1) Flush tags on the two boundary paths — but only at levels where
    //    the boundary actually cuts through a covering node. A node fully
    //    inside the range can keep its tag (its stored value already
    //    reflects it), which is the whole point of being lazy.
    for (let i = this.#log; i >= 1; i--) {
      if ((l >> i) << i !== l) this.#push(l >> i);
      if ((r >> i) << i !== r) this.#push((r - 1) >> i);
    }

    // 2) Standard bottom-up fold. Two accumulators preserve operand order,
    //    which is what makes non-commutative monoids work.
    let sml = this.e;
    let smr = this.e;
    while (l < r) {
      // An odd index is a right child: its parent's range sticks out past
      // the query bound, so absorb this node now and step inward.
      if (l & 1) sml = this.op(sml, this.#data[l++]);
      if (r & 1) smr = this.op(this.#data[--r], smr);
      l >>= 1;
      r >>= 1;
    }
    return this.op(sml, smr);
  }

  /**
   * Fold of all elements. Equivalent to prod(0, length). - O(1)
   * @returns {*}
   *
   * @example
   * const st = new LazySegmentTree([5, 3, 8], Math.min, Infinity,
   *   (f, x) => x + f, (f, g) => f + g, 0);
   * st.allProd(); // => 3
   */
  allProd() {
    return this.#data[1];
  }

  /**
   * Apply update `f` to the single element a[p]. - O(log n)
   * Throws RangeError if `p` is out of range.
   * @param {number} p 0-indexed position.
   * @param {*} f Update to apply.
   *
   * @example
   * const st = new LazySegmentTree([1, 2, 3], Math.min, Infinity,
   *   (f, x) => x + f, (f, g) => f + g, 0);
   * st.apply(1, 100);
   * st.get(1); // => 102
   */
  apply(p, f) {
    if (p < 0 || p >= this.#n) throw new RangeError(`index ${p} out of range`);
    p += this.#size;
    // Same shape as set(): flush down, modify the leaf, rebuild upward.
    for (let i = this.#log; i >= 1; i--) this.#push(p >> i);
    this.#data[p] = this.mapping(f, this.#data[p]);
    for (let i = 1; i <= this.#log; i++) this.#pull(p >> i);
  }

  /**
   * Apply update `f` to every element of the half-open range [l, r). - O(log n)
   * Throws RangeError if the range is invalid.
   * @param {number} l Inclusive left bound.
   * @param {number} r Exclusive right bound.
   * @param {*} f Update to apply.
   *
   * @example
   * const st = new LazySegmentTree([1, 2, 3, 4, 5], Math.min, Infinity,
   *   (f, x) => x + f, (f, g) => f + g, 0);
   * st.applyRange(1, 4, 10); // a = [1, 12, 13, 14, 5]
   * st.prod(0, 5);           // => 1
   */
  applyRange(l, r, f) {
    if (l < 0 || r > this.#n || l > r) {
      throw new RangeError(`invalid range [${l}, ${r})`);
    }
    if (l === r) return;

    l += this.#size;
    r += this.#size;

    // 1) Flush boundary tags so the new tag composes onto a clean slate
    //    at every node the boundary cuts through.
    for (let i = this.#log; i >= 1; i--) {
      if ((l >> i) << i !== l) this.#push(l >> i);
      if ((r >> i) << i !== r) this.#push((r - 1) >> i);
    }

    // 2) Tag the O(log n) nodes that exactly cover [l, r). Same index walk
    //    as prod(), but writing tags instead of reading values.
    {
      let l2 = l;
      let r2 = r;
      while (l2 < r2) {
        if (l2 & 1) this.#applyAll(l2++, f);
        if (r2 & 1) this.#applyAll(--r2, f);
        l2 >>= 1;
        r2 >>= 1;
      }
    }

    // 3) Boundary ancestors now summarize children whose values changed:
    //    rebuild them bottom-up. Interior ancestors were never touched.
    for (let i = 1; i <= this.#log; i++) {
      if ((l >> i) << i !== l) this.#pull(l >> i);
      if ((r >> i) << i !== r) this.#pull((r - 1) >> i);
    }
  }

  // Logical element count, padded tree width (a power of two), its log2,
  // the flat node array, and the pending tags. Index 1 is the root;
  // indices [#size, #size + #n) are the live leaves.
  #n;
  #size;
  #log;
  #data;
  #lazy;

  /** Recompute node `i` from its two children. */
  #pull(i) {
    this.#data[i] = this.op(this.#data[2 * i], this.#data[2 * i + 1]);
  }

  /**
   * Apply update `f` to node `i`: refresh its stored value now, and if it
   * is an internal node, remember `f` in its tag so descendants get it later.
   */
  #applyAll(i, f) {
    this.#data[i] = this.mapping(f, this.#data[i]);
    if (i < this.#size) {
      this.#lazy[i] = this.composition(f, this.#lazy[i]);
    }
  }

  /** Push node `i`'s pending tag one level down to its children. */
  #push(i) {
    if (this.#lazy[i] === this.id) return; // nothing pending — skip
    this.#applyAll(2 * i, this.#lazy[i]);
    this.#applyAll(2 * i + 1, this.#lazy[i]);
    this.#lazy[i] = this.id;
  }
}

const st = new LazySegmentTree(
  Array(W).fill(0), // nOrArray
  (a, b) => Math.max(a, b), // op
  -1, // e
  (f, x) => f, // mapping
  (f, g) => f, // composition
  0, // id
);

for (let i = 0; i < N; i++) {
  let [l, r] = input[i + 1].split(' ').map(Number);
  l--;
  r--;

  const max = st.prod(l, r + 1);
  console.log(max + 1);
  st.applyRange(l, r + 1, max + 1);
}
