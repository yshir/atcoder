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

const visited = [];
for (let i = 0; i < H; i++) {
  visited[i] = [];
  for (let j = 0; j < W; j++) {
    visited[i][j] = undefined;
  }
}

const warp = {};
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    const b = S[i][j];
    if (b !== '#' && b !== '.') {
      warp[b] = warp[b] || [];
      warp[b].push([i, j]);
    }
  }
}

const q = new Queue();
const push = (i, j, l) => {
  if (visited[i][j] !== undefined) {
    return;
  }
  visited[i][j] = l;
  q.enqueue([i, j, l]);
};
push(0, 0, 0);
while (!q.empty()) {
  const [i, j, l] = q.dequeue();

  if (S[i][j] !== '#' && S[i][j] !== '.') {
    const to = warp[S[i][j]];
    if (to) {
      for (const [ni, nj] of to) {
        if (ni === i && nj === j) {
          continue;
        }
        push(ni, nj, l + 1);
      }
      delete warp[S[i][j]];
    }
  }

  for (const [dx, dy] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]) {
    const nx = i + dx;
    const ny = j + dy;
    if (nx < 0 || ny < 0 || nx >= H || ny >= W) {
      continue;
    }

    const b = S[nx][ny];
    if (b !== '#') {
      push(nx, ny, l + 1);
    }
  }
}

const ans = visited[H - 1][W - 1];
console.log(ans === undefined ? -1 : ans);
