const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const [M] = input[2].split(' ').map(Number);
const B = input[3].split(' ').map(Number);
const [X] = input[4].split(' ').map(Number);

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

const B_set = new Uint8Array(X + 1);
for (const b of B) B_set[b] = 1;

const q = new Queue();
const C = new Uint8Array(X + 1);

q.enqueue(0);
C[0] = 1;

while (!q.empty()) {
  const u = q.dequeue();
  for (let i = 0; i < N; i++) {
    const v = u + A[i];
    if (v > X) continue;
    if (B_set[v]) continue;
    if (C[v]) continue;
    C[v] = 1;
    q.enqueue(v);
  }
}

console.log(C[X] ? 'Yes' : 'No');
