const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) G[i] = [];
for (let i = 0; i < M; i++) {
  let [u, v] = input[i + 1].split(' ').map(Number);
  u--;
  v--;
  G[u].push(v);
  G[v].push(u);
}

const S = input[M + 1];

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

const D = [];
for (let i = 0; i < N; i++) D[i] = [];

const q = new Queue();
for (let i = 0; i < N; i++) {
  if (S[i] === 'S') {
    D[i].push([i, 0]);
    q.enqueue([i, i, 0]);
  }
}

while (!q.empty()) {
  const [i, u, x] = q.dequeue();
  for (const v of G[u]) {
    if (D[v].length === 2) continue;
    if (D[v].length === 1 && D[v][0][0] === i) continue;
    D[v].push([i, x + 1]);
    q.enqueue([i, v, x + 1]);
  }
}

for (let i = 0; i < N; i++) {
  if (S[i] === 'D') {
    console.log(D[i][0][1] + D[i][1][1]);
  }
}
