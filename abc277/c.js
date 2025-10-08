const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const G = {};
for (let i = 0; i < N; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  G[a] = G[a] || [];
  G[a].push(b);
  G[b] = G[b] || [];
  G[b].push(a);
}

const visited = new Set();

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

const enqueue = (i) => {
  if (visited.has(i)) return;
  visited.add(i);
  q.enqueue(i);
};

enqueue(0);
while (!q.empty()) {
  const i = q.dequeue();
  for (next of G[i] || []) {
    enqueue(next);
  }
}

console.log(Math.max(...visited) + 1);
