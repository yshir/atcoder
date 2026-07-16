const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) S[i] = input[i + 1];

const A = [];
for (let i = 0; i < H; i++) {
  A[i] = [];
  for (let j = 0; j < W; j++) A[i][j] = 0;
}

const T = 'snuke';

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

const f = () => {
  if (S[0][0] !== 's') return false;

  const q = new Queue();
  q.enqueue([0, 0]);
  A[0][0] = 1;
  while (!q.empty()) {
    const [i, j] = q.dequeue();
    for (const [di, dj] of [
      [1, 0],

      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const ni = i + di;
      const nj = j + dj;
      if (ni < 0 || ni >= H || nj < 0 || nj >= W) continue;

      const k = T.indexOf(S[i][j]);
      const nk = (k + 1) % T.length;
      if (S[ni][nj] !== T[nk]) continue;

      if (A[ni][nj]) continue;
      A[ni][nj] = 1;
      q.enqueue([ni, nj]);
    }
  }

  return A[H - 1][W - 1] === 1;
};

console.log(f() ? 'Yes' : 'No');
