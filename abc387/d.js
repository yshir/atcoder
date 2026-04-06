const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

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

let init = [];

const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1].split('');
  for (let j = 0; j < W; j++) {
    if (S[i][j] === 'S') init = [i, j];
  }
}

const D = {
  true: [
    [0, 1],
    [0, -1],
  ],
  false: [
    [1, 0],
    [-1, 0],
  ],
};

const f = (initFlag) => {
  const seen = [];
  for (let i = 0; i < H; i++) {
    seen[i] = [];
    for (let j = 0; j < W; j++) {
      seen[i][j] = false;
    }
  }

  const q = new Queue();
  const enq = (i, j, v, flag) => {
    q.enqueue([i, j, v, flag]);
    seen[i][j] = true;
  };
  enq(init[0], init[1], 0, initFlag);

  while (!q.empty()) {
    const [i, j, v, flag] = q.dequeue();
    for (const [di, dj] of D[flag]) {
      const ni = i + di;
      const nj = j + dj;
      if (ni < 0 || ni === H || nj < 0 || nj === W) continue;
      const b = S[ni][nj];
      if (b === 'G') {
        return v + 1;
      }
      if (b === '#' || b === 'S' || seen[ni][nj]) continue;
      enq(ni, nj, v + 1, !flag);
    }
  }
  return null;
};

const ans1 = f(true);
const ans2 = f(false);

if (ans1 === null && ans2 === null) {
  console.log(-1);
} else {
  const INF = Number.MAX_SAFE_INTEGER;
  console.log(Math.min(ans1 || INF, ans2 || INF));
}
