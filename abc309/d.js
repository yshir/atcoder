const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N1, N2, M] = input[0].split(' ').map(Number);
const N = N1 + N2;

const G = [];
for (let i = 0; i < N; i++) G[i] = [];

for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  G[a].push(b);
  G[b].push(a);
}

const D = [];
for (let i = 0; i < N; i++) D[i] = undefined;

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

q.enqueue(0);
q.enqueue(N - 1);
D[0] = 0;
D[N - 1] = 0;

while (!q.empty()) {
  const u = q.dequeue();
  for (const v of G[u]) {
    if (D[v] !== undefined) continue;
    D[v] = D[u] + 1;
    q.enqueue(v);
  }
}

let max1 = 0;
let max2 = 0;
for (let i = 0; i < N1; i++) max1 = Math.max(max1, D[i]);
for (let i = N1; i < N; i++) max2 = Math.max(max2, D[i]);
console.log(max1 + max2 + 1);
