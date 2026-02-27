const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const keys = {
  a: 0,
  t: 1,
  c: 2,
  o: 3,
  d: 4,
  e: 5,
  r: 6,
};

const A = [];
for (let i = 0; i < 8; i++) {
  A[i] = [];
  for (let j = 0; j < N + 1; j++) {
    A[i][j] = 0;
  }
}
for (let j = 0; j < N + 1; j++) {
  A[0][j] = 1;
}

for (let j = 0; j < N; j++) {
  for (let i = 0; i < 8; i++) {
    A[i][j + 1] = A[i][j];
  }

  const k = keys[S[j]];
  if (k !== undefined) {
    A[k + 1][j + 1] += A[k][j];
    A[k + 1][j + 1] = A[k + 1][j + 1] % (10 ** 9 + 7);
  }
}

console.log(A[7][N]);
