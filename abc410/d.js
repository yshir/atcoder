const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}

for (let i = 0; i < M; i++) {
  let [a, b, w] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  G[a].push({ b, w });
}

// 頂点倍加.
const W = 1 << 10;
const visited = [];
for (let i = 0; i < N; i++) {
  visited[i] = [];
  for (let j = 0; j < W; j++) {
    visited[i][j] = false;
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

const enqueue = (v, w) => {
  if (visited[v][w]) return;
  visited[v][w] = true;
  q.enqueue({ v, w });
};

enqueue(0, 0);
while (!q.empty()) {
  const { v, w } = q.dequeue();
  for (const next of G[v]) {
    enqueue(next.b, next.w ^ w);
  }
}

for (let i = 0; i < W; i++) {
  if (visited[N - 1][i]) {
    console.log(i);
    return;
  }
}
console.log(-1);
