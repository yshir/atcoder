const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) G[i] = [];
for (let i = 0; i < N - 1; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  G[a].push(b);
  G[b].push(a);
}

const ans = [];
for (let i = 0; i < N; i++) ans[i] = [-1, 0];

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
  let max_i = -1;
  let max = 0;

  const q = new Queue();
  q.enqueue([i, i, 0]);
  while (!q.empty()) {
    const [u, p, x] = q.dequeue();

    if (x > ans[u][0] || (x === ans[u][0] && i > ans[u][1])) {
      ans[u] = [x, i];
    }
    if (x > max || (x === max && u > max_i)) {
      max = x;
      max_i = u;
    }

    for (const v of G[u]) {
      if (v === p) continue;
      q.enqueue([v, u, x + 1]);
    }
  }

  return [max, max_i];
};

const R = f(0);
const L = f(R[1]);
f(L[1]);

console.log(ans.map((x) => x[1] + 1).join('\n'));
