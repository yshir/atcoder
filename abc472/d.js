const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [H, W, K] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) S[i] = input[i + 1];

const R = Array(H).fill(0);
const C = Array(W).fill(0);
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === '#') {
      R[i] = 1;
      C[j] = 1;
    }
  }
}

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

const A = [];
for (let i = 0; i < H; i++) {
  A[i] = [];
  for (let j = 0; j < W; j++) {
    A[i][j] = undefined;
  }
}

let ans = 0;
const q = new Queue();
const push = (i, j, v) => {
  q.enqueue([i, j]);
  A[i][j] = v;
  ans++;
};

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (!R[i] && !C[j]) {
      push(i, j, 0);
    }
  }
}

while (!q.empty()) {
  const [i, j] = q.dequeue();
  for (const [di, dj] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]) {
    const ni = i + di;
    const nj = j + dj;
    if (ni < 0 || ni >= H || nj < 0 || nj >= W) continue;
    if (A[ni][nj] !== undefined) continue;
    if (S[ni][nj] === '#') continue;

    const nv = A[i][j] + 1;
    if (nv > K) continue;
    push(ni, nj, nv);
  }
}

console.log(ans);
