const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}

for (let i = 0; i < M; i++) {
  let [a, b, x, y] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  G[a].push([b, x, y]);
  G[b].push([a, -x, -y]);
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
for (let i = 0; i < N; i++) {
  ans[i] = undefined;
}
ans[0] = [0n, 0n];

const q = new Queue();
q.enqueue(0);

while (!q.empty()) {
  const u = q.dequeue();
  for (const [v, dx, dy] of G[u]) {
    if (ans[v] === undefined) {
      const [x, y] = ans[u];
      const nx = x + BigInt(dx);
      const ny = y + BigInt(dy);
      ans[v] = [nx, ny];
      q.enqueue(v);
    }
  }
}

console.log(ans.map((x) => (x === undefined ? 'undecidable' : x.join(' '))).join('\n'));
