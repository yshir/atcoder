const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, L, S, T] = input[0].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}

for (let i = 0; i < M; i++) {
  let [u, v, c] = input[i + 1].split(' ').map(Number);
  u--;
  v--;
  G[u].push({ v, c });
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
const ans = new Set();

const push = (u, c, l) => {
  q.enqueue({ u, c, l });
};

push(0, 0, 0);

while (!q.empty()) {
  const { u, c, l } = q.dequeue();
  if (l === L) {
    if (S <= c && c <= T) {
      ans.add(u);
    }
    continue;
  }

  for (const nxt of G[u]) {
    push(nxt.v, c + nxt.c, l + 1);
  }
}

if (ans.size === 0) {
  console.log('');
} else {
  console.log(
    [...ans]
      .sort((x, y) => x - y)
      .map((x) => x + 1)
      .join(' '),
  );
}
