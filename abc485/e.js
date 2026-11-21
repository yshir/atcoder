const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const G = [];
for (let i = 0; i < N; i++) G[i] = [];
for (let i = 0; i < M; i++) {
  let [u, v, c] = input[i + 1].split(' ').map(Number);
  u--;
  v--;
  G[u].push([v, c]);
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

const A = [];
for (let i = 0; i < N; i++) A[i] = [];

const q = new Queue();
const push = (u, c, d) => {
  q.enqueue([u, c, d]);
  A[u].push([c, d]);
};
push(0, -1, 0);

while (!q.empty()) {
  const [u, c, d] = q.dequeue();
  for (const [v, c2] of G[u]) {
    if (c === c2) continue;
    if (A[v].length >= 2 || (A[v].length === 1 && A[v][0][0] === c2)) continue;
    push(v, c2, d + 1);
  }
}

console.log(A[N - 1].length > 0 ? Math.min(...A[N - 1].map((x) => x[1])) : -1);
