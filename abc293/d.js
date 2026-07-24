const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}

for (let i = 0; i < M; i++) {
  const [a, b, c, d] = input[i + 1]
    .split(' ')
    .map(Number)
    .map((x) => x - 1);
  G[a].push(c);
  G[c].push(a);
}

let X = 0;
let Y = 0;

const seen = new Uint8Array(N);

const f = (i) => {
  if (seen[i]) return;
  seen[i] = 1;

  const dfs = (u, p = null) => {
    for (const v of G[u]) {
      if (p === v) continue;
      if (seen[v]) return true;
      seen[v] = 1;
      if (dfs(v, u)) return true;
    }
    return false;
  };

  if (dfs(i)) {
    X++;
  } else {
    Y++;
  }
};

for (let i = 0; i < N; i++) {
  f(i);
}

console.log([X, Y].join(' '));
