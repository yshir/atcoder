const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const G = [];
for (let i = 0; i < N; i++) G[i] = [];
for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  G[a].push(b);
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

const L = [];
for (let i = 0; i < N; i++) L[i] = null;

const q = new Queue();
q.enqueue(0);
L[0] = 0;

const ans = [];
while (!q.empty()) {
  const a = q.dequeue();
  for (const b of G[a]) {
    if (b === 0) {
      ans.push(L[a] + 1);
    } else if (L[b] === null) {
      L[b] = L[a] + 1;
      q.enqueue(b);
    }
  }
}

if (ans.length === 0) {
  console.log(-1);
} else {
  console.log(Math.min(...ans));
}
