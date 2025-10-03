const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const A = [[], []];
for (let i = 0; i < H; i++) {
  A[0][i] = [];
  A[1][i] = [];
  for (let j = 0; j < W; j++) {
    A[0][i][j] = input[i + 1][j];
    A[1][i][j] = input[i + 1][j];
    if (A[1][i][j] === 'o') {
      A[1][i][j] = 'x';
    } else if (A[1][i][j] === 'x') {
      A[1][i][j] = 'o';
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

let x = 0;
let y = 0;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (A[0][i][j] === 'S') {
      x = i;
      y = j;
    }
  }
}

const B = [];
for (let z = 0; z < 2; z++) {
  B[z] = [];
  for (let i = 0; i < H; i++) {
    B[z][i] = [];
    for (let j = 0; j < W; j++) {
      B[z][i][j] = -1;
    }
  }
}

const q = new Queue();
q.enqueue({ x, y, z: 0, d: 0 });
while (!q.empty()) {
  const { x, y, z, d } = q.dequeue();

  for (const [dx, dy] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]) {
    const nx = x + dx;
    const ny = y + dy;
    if (nx < 0 || ny < 0 || nx >= H || ny >= W) continue;
    if (A[z][nx][ny] === '#' || A[z][nx][ny] === 'x') continue;
    if (B[z][nx][ny] !== -1) continue;

    const nd = d + 1;
    if (A[z][nx][ny] === 'G') {
      console.log(nd);
      return;
    }

    B[z][nx][ny] = nd;

    const nz = A[z][nx][ny] === '?' ? 1 - z : z;
    q.enqueue({ x: nx, y: ny, z: nz, d: nd });
  }
}
console.log(-1);
