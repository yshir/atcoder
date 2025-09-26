const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, D] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ').map(Number);
  A[i] = { i, x, y, seen: false };
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
q.enqueue(A[0]);
while (!q.empty()) {
  const s = q.dequeue();
  if (s.seen) continue;

  s.seen = true;
  for (let i = 0; i < N; i++) {
    const d = Math.pow(s.x - A[i].x, 2) + Math.pow(s.y - A[i].y, 2);
    if (s.i !== i && !A[i].seen && d <= D ** 2) {
      q.enqueue(A[i]);
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(A[i].seen ? 'Yes' : 'No');
}
