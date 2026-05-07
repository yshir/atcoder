const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const E = [];
for (let i = 0; i < N; i++) E[i] = [];

for (let i = 0; i < M; i++) {
  let [u, v, w] = input[1 + i].split(' ').map(Number);
  u--;
  v--;
  E[u].push([v, w]);
  E[v].push([u, -w]);
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

const ans = [];
for (let i = 0; i < N; i++) ans[i] = null;

for (let i = 0; i < N; i++) {
  if (ans[i] === null) {
    const q = new Queue();
    q.enqueue(i);
    ans[i] = 0;

    while (!q.empty()) {
      const u = q.dequeue();
      for (const [v, w] of E[u]) {
        if (ans[v] === null) {
          ans[v] = ans[u] + w;
          q.enqueue(v);
        }
      }
    }
  }
}

console.log(ans.join(' '));
