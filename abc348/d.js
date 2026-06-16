const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
let id = 0;
const A = [];
for (let i = 0; i < H; i++) {
  A[i] = [];
  for (let j = 0; j < W; j++) {
    const v = input[i + 1][j];
    A[i][j] = {
      id: id++,
      i,
      j,
      v,
      e: undefined,
      s: v === 'S',
      t: v === 'T',
    };
  }
}
const [N] = input[H + 1].split(' ').map(Number);
for (let i = 0; i < N; i++) {
  let [r, c, e] = input[i + 2 + H].split(' ').map(Number);
  r--;
  c--;
  A[r][c].e = e;
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (A[i][j].s && A[i][j].e === undefined) {
      console.log('No');
      return;
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

const q1 = new Queue();
const q2 = new Queue();

const seen1 = new Set();
const seen2 = new Set();

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (A[i][j].t) {
      q1.enqueue(A[i][j]);
      seen1.add(A[i][j].id);
    }
  }
}

while (!q1.empty()) {
  seen2.clear();
  q2.enqueue([q1.dequeue(), 0]);
  while (!q2.empty()) {
    const [p, x] = q2.dequeue();
    const nx = x + 1;

    for (const [di, dj] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const ni = p.i + di;
      const nj = p.j + dj;
      if (ni < 0 || ni === H || nj < 0 || nj === W) continue;

      const np = A[ni][nj];
      if (np.v === '#') continue;
      if (seen1.has(np.id)) continue;
      if (seen2.has(np.id)) continue;
      seen2.add(np.id);

      if (np.s && np.e >= nx) {
        console.log('Yes');
        return;
      }

      if (np.e !== undefined && np.e >= nx) {
        q1.enqueue(np);
        seen1.add(np.id);
        continue;
      }

      q2.enqueue([np, nx]);
      seen2.add(np.id);
    }
  }
}

console.log('No');
