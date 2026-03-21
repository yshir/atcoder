const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1];
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

let cnt = 0;

const seen = new Set();
const key = (i, j) => i * W + j;
// const key = (i, j) => `${i}_${j}`;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (seen.has(key(i, j))) continue;
    seen.add(key(i, j));

    if (S[i][j] === '#') {
      continue;
    }

    let ng = !(i > 0 && j > 0 && i < H - 1 && j < W - 1);
    const q = new Queue();
    q.enqueue([i, j]);
    while (!q.empty()) {
      const [ti, tj] = q.dequeue();
      for (const [di, dj] of [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ]) {
        const ni = ti + di;
        const nj = tj + dj;

        if (ni < 0 || nj < 0 || ni === H || nj === W) continue;
        if (S[ni][nj] === '#') continue;

        if (seen.has(key(ni, nj))) continue;
        seen.add(key(ni, nj));

        ng = ng || !(ni > 0 && nj > 0 && ni < H - 1 && nj < W - 1);
        q.enqueue([ni, nj]);
      }
    }
    if (!ng) {
      cnt++;
    }
  }
}
console.log(cnt);
