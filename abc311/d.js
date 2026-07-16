const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) S[i] = input[i + 1];

const A = [];
const B = [];
for (let i = 0; i < N; i++) {
  A[i] = [];
  B[i] = [];
  for (let j = 0; j < M; j++) {
    A[i][j] = 0;
    B[i][j] = 0;
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

const q = new Queue();
q.enqueue([1, 1]);
A[1][1] = 1;
B[1][1] = 1;

while (!q.empty()) {
  const [i, j] = q.dequeue();

  for (const [di, dj] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]) {
    let ni = i;
    let nj = j;
    while (1) {
      const ti = ni + di;
      const tj = nj + dj;
      if (ti < 0 || ti >= N || tj < 0 || tj >= M) break;
      if (S[ti][tj] === '#') break;
      ni = ti;
      nj = tj;
      B[ni][nj] = 1;
    }
    if (i === ni && j === nj) continue;
    if (A[ni][nj] === 1) continue;
    A[ni][nj] = 1;
    q.enqueue([ni, nj]);
  }
}

let ans = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (B[i][j]) ans++;
  }
}
console.log(ans);
