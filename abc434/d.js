const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const C = [];
for (let i = 0; i < N; i++) {
  C[i] = input[i + 1]
    .split(' ')
    .map(Number)
    .map((x) => x - 1);
}

const M = 2000;

const G = [];
for (let i = 0; i < M; i++) {
  G[i] = [];
  for (let j = 0; j < M; j++) {
    G[i][j] = 0;
  }
}

const G_add = (i, j, v) => {
  if (i < 0 || j < 0 || i >= M || j >= M) return;
  G[i][j] += v;
};

for (let i = 0; i < N; i++) {
  const [u, d, l, r] = C[i];
  G_add(u + 0, l + 0, 1);
  G_add(u + 0, r + 1, -1);
  G_add(d + 1, l + 0, -1);
  G_add(d + 1, r + 1, 1);
}

for (let i = 0; i < M; i++) for (let j = 0; j < M - 1; j++) G[i][j + 1] += G[i][j];
for (let j = 0; j < M; j++) for (let i = 0; i < M - 1; i++) G[i + 1][j] += G[i][j];

let sum = 0;
for (let i = 0; i < M; i++) for (let j = 0; j < M; j++) if (G[i][j] === 0) sum++;

const F = [];
for (let i = 0; i < M; i++) {
  F[i] = [];
  for (let j = 0; j < M; j++) {
    F[i][j] = 0;
  }
}

for (let i = 0; i < M; i++) for (let j = 0; j < M; j++) if (G[i][j] === 1) F[i][j] = 1;

for (let i = 0; i < M; i++) for (let j = 0; j < M - 1; j++) F[i][j + 1] += F[i][j];
for (let j = 0; j < M; j++) for (let i = 0; i < M - 1; i++) F[i + 1][j] += F[i][j];

const F_get = (i, j) => {
  if (i < 0 || j < 0 || i >= M || j >= M) return 0;
  return F[i][j];
};

for (let i = 0; i < N; i++) {
  const [u, d, l, r] = C[i];
  const sub = F_get(d, r) - F_get(u - 1, r) - F_get(d, l - 1) + F_get(u - 1, l - 1);
  console.log(sum + sub);
}
