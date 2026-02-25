const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [M, A, B] = input[0].split(' ').map(Number);

const key = (i, j) => i * M + j;

const G = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < M; j++) {
    G[key(i, j)] = [];
  }
}
for (let i = 0; i < M; i++) {
  for (let j = 0; j < M; j++) {
    G[key((A * i + B * j) % M, i)].push(key(i, j));
  }
}

const used = new Set();

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

const queue = new Queue();

const push = (k) => {
  if (used.has(k)) return;
  used.add(k);
  queue.enqueue(k);
};

for (let i = 0; i < M; i++) push(key(i, 0));
for (let j = 0; j < M; j++) push(key(0, j));

while (!queue.empty()) {
  const k2 = queue.dequeue();
  for (k of G[k2]) {
    push(k);
  }
}

console.log(M ** 2 - used.size);
