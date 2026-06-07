const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const M = 1001;

const A = [];
for (let i = 0; i < M; i++) {
  A[i] = [];
  for (let j = 0; j < M; j++) {
    A[i][j] = 0;
  }
}

for (let i = 0; i < N; i++) {
  const [lx, ly, rx, ry] = input[i + 1].split(' ').map(Number);
  A[lx][ly] += 1;
  A[lx][ry] += -1;
  A[rx][ly] += -1;
  A[rx][ry] += 1;
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < M - 1; j++) {
    A[i][j + 1] += A[i][j];
  }
}
for (let i = 0; i < M - 1; i++) {
  for (let j = 0; j < M; j++) {
    A[i + 1][j] += A[i][j];
  }
}

const B = [];
for (let i = 0; i <= N; i++) B[i] = 0;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < M; j++) {
    B[A[i][j]]++;
  }
}

for (let k = 1; k <= N; k++) {
  console.log(B[k]);
}
