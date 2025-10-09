const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

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
const seen = new Set();

const enqueue = (i) => {
  if (seen.has(i)) return;
  seen.add(i);
  q.enqueue(i);
};

const X = [];
for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  if (a === 0 && b === 0) {
    enqueue(i + 1);
  } else {
    X[a] = X[a] || [];
    X[a].push(i + 1);
    X[b] = X[b] || [];
    X[b].push(i + 1);
  }
}

while (!q.empty()) {
  const i = q.dequeue();
  for (const j of X[i] || []) {
    enqueue(j);
  }
}

console.log(seen.size);
