const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
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

const q = new Queue();

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === 'E') {
      q.enqueue([i, j]);
    }
  }
}

const push = (a, b, c) => {
  q.enqueue([a, b]);
  S[a][b] = c;
};

while (!q.empty()) {
  const [i, j] = q.dequeue();

  for (const [dx, dy, dd] of [
    [1, 0, '^'],
    [-1, 0, 'v'],
    [0, 1, '<'],
    [0, -1, '>'],
  ]) {
    const nx = i + dx;
    const ny = j + dy;
    if (nx < 0 || ny < 0 || nx >= H || ny >= W) {
      continue;
    }
    if (S[nx][ny] !== '.') {
      continue;
    }
    push(nx, ny, dd);
  }
}

for (let i = 0; i < H; i++) {
  console.log(S[i].join(''));
}
