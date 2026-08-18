const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const X = input[1].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}
for (let i = 0; i < N - 1; i++) {
  let [u, v, w] = input[i + 2].split(' ').map(Number);
  u--;
  v--;
  G[u].push([v, w]);
  G[v].push([u, w]);
}
const L = [];
for (let i = 0; i < N; i++) L[i] = G[i].length;

const done = new Set();

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
  if (G[i].length === 1) {
    q.enqueue(i);
  }
}

let ans = 0;

while (!q.empty()) {
  const u = q.dequeue();

  const vs = [];
  for (const [v, w] of G[u]) if (!done.has(v)) vs.push([v, w]);
  if (vs.length === 0) continue;
  const [v, w] = vs[0];

  if (X[u] !== 0) {
    X[v] += X[u];
    ans += w * Math.abs(X[u]);
    X[u] = 0;
  }

  done.add(u);
  L[v]--;
  if (L[v] === 1) q.enqueue(v);
}

console.log(ans);
