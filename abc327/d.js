const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}

for (let i = 0; i < M; i++) {
  const a = A[i] - 1;
  const b = B[i] - 1;
  G[a].push(b);
  G[b].push(a);
}

const C = [];
for (let i = 0; i < N; i++) {
  C[i] = undefined;
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

const f = (i) => {
  const q = new Queue();
  q.enqueue(i);
  C[i] = true;

  while (!q.empty()) {
    const u = q.dequeue();
    for (const v of G[u]) {
      if (C[v] === undefined) {
        C[v] = !C[u];
        q.enqueue(v);
      } else {
        if (C[v] === C[u]) {
          return false;
        }
      }
    }
  }

  return true;
};

for (let i = 0; i < N; i++) {
  if (C[i] === undefined) {
    if (!f(i)) {
      console.log('No');
      return false;
    }
  }
}
console.log('Yes');
