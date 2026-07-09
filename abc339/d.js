const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
}

const P = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (S[i][j] === 'P') {
      P.push([i, j]);
    }
  }
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

const NN = N * N;
const k = (a, b) => {
  return (a[0] * N + a[1]) * NN + (b[0] * N + b[1]);
};

const set = new Uint8Array(NN * NN);
const q = new Queue();

const push = (a, b, x) => {
  q.enqueue([a, b, x]);
  set[k(a, b)] = 1;
};

push(P[0], P[1], 0);
let ans = -1;

(() => {
  while (!q.empty()) {
    const [a, b, x] = q.dequeue();
    for (const [di, dj] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]) {
      const [ai, aj] = a;
      const [bi, bj] = b;

      let nai = ai + di;
      let naj = aj + dj;
      let nbi = bi + di;
      let nbj = bj + dj;

      const na = nai < 0 || nai >= N || naj < 0 || naj >= N || S[nai][naj] === '#' ? a : [nai, naj];
      const nb = nbi < 0 || nbi >= N || nbj < 0 || nbj >= N || S[nbi][nbj] === '#' ? b : [nbi, nbj];
      if (set[k(na, nb)]) continue;

      if (na[0] === nb[0] && na[1] === nb[1]) {
        ans = x + 1;
        return;
      } else {
        push(na, nb, x + 1);
      }
    }
  }
})();

console.log(ans);
