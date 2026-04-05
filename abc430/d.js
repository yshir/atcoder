const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const X = input[1].split(' ').map(BigInt);

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

    node.height = 1 + Math.max(this.#getHeight(node.left), this.#getHeight(node.right));
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

    node.height = 1 + Math.max(this.#getHeight(node.left), this.#getHeight(node.right));
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

  #inOrderTraversal(node, result) {
    if (node) {
      this.#inOrderTraversal(node.left, result);
      result.push(node.key);
      this.#inOrderTraversal(node.right, result);
    }
  }
}

const INF = BigInt(Number.MAX_SAFE_INTEGER);

const math_min = (a, b) => {
  if (a > b) return b;
  return a;
};

const tree = new AVLTree();
tree.insert(0n);

let sum = 0n;

for (let i = 0; i < N; i++) {
  tree.insert(X[i]);
  const idx = tree.indexOf(X[i]);

  const l = tree.at(idx - 1);
  const r = tree.at(idx + 1);
  const l_safe = l !== null ? l : -INF;
  const r_safe = r !== null ? r : INF;
  sum += math_min(X[i] - l_safe, r_safe - X[i]);

  if (l !== null) {
    const ll = tree.at(idx - 2);
    const lr = r;
    const ll_safe = ll !== null ? ll : -INF;
    const lr_safe = lr !== null ? lr : INF;
    if (ll !== null || lr !== null) {
      sum -= math_min(l - ll_safe, lr_safe - l);
    }
    sum += math_min(l - ll_safe, X[i] - l);
  }

  if (r !== null) {
    const rl = l;
    const rr = tree.at(idx + 2);
    const rl_safe = rl !== null ? rl : -INF;
    const rr_safe = rr !== null ? rr : INF;
    if (rl !== null || rr !== null) {
      sum -= math_min(r - rl_safe, rr_safe - r);
    }
    sum += math_min(r - X[i], rr_safe - r);
  }

  console.log(sum.toString());
}
