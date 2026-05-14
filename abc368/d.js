let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[line++].split(' ').map(Number);
const G = [];
for (let i = 0; i < N; i++) G[i] = new Set();
for (let i = 0; i < N - 1; i++) {
  let [a, b] = input[line++].split(' ').map(Number);
  a--;
  b--;
  G[a].add(b);
  G[b].add(a);
}
const V = new Set(
  input[line++]
    .split(' ')
    .map(Number)
    .map((x) => x - 1),
);

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
for (let i = 0; i < N; i++) {
  if (G[i].size === 1) {
    q.enqueue(i);
  }
}

let del = 0;
while (!q.empty()) {
  const u = q.dequeue();
  if (V.has(u)) continue;
  del++;
  for (const v of G[u]) {
    G[v].delete(u);
    if (G[v].size === 1) {
      q.enqueue(v);
    }
  }
}

console.log(N - del);
