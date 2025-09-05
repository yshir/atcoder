const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, D] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1].split('');
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

const T = [];
for (let i = 0; i < H; i++) {
  T[i] = [];
  for (let j = 0; j < W; j++) {
    T[i][j] = -1;
  }
}

const q = new Queue();
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === 'H') {
      q.enqueue({ i, j });
      T[i][j] = 0;
    }
  }
}
while (!q.empty()) {
  const { i, j } = q.dequeue();

  for (const [dx, dy] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]) {
    const x = i + dx;
    const y = j + dy;
    if (x < 0 || x > H - 1 || y < 0 || y > W - 1) {
      continue;
    }
    if (T[x][y] !== -1) {
      continue;
    }
    if (S[x][y] === '#') {
      continue;
    }

    T[x][y] = T[i][j] + 1;
    q.enqueue({ i: x, j: y });
  }
}

let cnt = 0;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (T[i][j] !== -1 && T[i][j] <= D) cnt++;
  }
}
console.log(cnt);
