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

const C = [];
for (let i = 0; i < N; i++) C[i] = null;

const dfs = (u, a) => {
  for (const v of G[u]) {
    if (C[v] === null) {
      C[v] = a;
      dfs(v, 1 - a);
    }
  }
};

C[0] = 1;
dfs(0, 0);

const c0 = [];
const c1 = [];

for (let i = 0; i < N; i++) {
  if (C[i] === 0) c0.push(i);
  if (C[i] === 1) c1.push(i);
}

if (c0.length >= N / 2) {
  console.log(
    c0
      .map((x) => x + 1)
      .slice(0, N / 2)
      .join(' '),
  );
} else {
  console.log(
    c1
      .map((x) => x + 1)
      .slice(0, N / 2)
      .join(' '),
  );
}
