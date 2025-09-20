const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1].split('');
}

const k = (i, j) => i + '_' + j;

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

const seen = new Set();
let cnt = 0;

const bfs = (x, y) => {
  const q = new Queue();
  q.enqueue([x, y]);

  while (!q.empty()) {
    const [x, y] = q.dequeue();

    if (x < 0 || y < 0 || x >= H || y >= W) {
      continue;
    }
    if (seen.has(k(x, y))) {
      continue;
    }
    seen.add(k(x, y));

    if (S[x][y] === '#') {
      for (const [dx, dy] of [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]) {
        q.enqueue([x + dx, y + dy]);
      }
    }
  }
};

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (seen.has(k(i, j))) {
      continue;
    }
    if (S[i][j] === '.') {
      seen.add(k(i, j));
    } else {
      cnt++;
      bfs(i, j);
    }
  }
}

console.log(cnt);
