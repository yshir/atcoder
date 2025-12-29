const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const X = [];
for (let i = 0; i < 31; i++) {
  X[i] = [];
  for (let j = 0; j < N; j++) {
    if (i === 0) {
      X[i][j] = A[j] - 1;
    } else {
      X[i][j] = X[i - 1][X[i - 1][j]];
    }
  }
}

const Y = [];
for (let i = 0; i < 31; i++) {
  Y[i] = [];
  for (let j = 0; j < N; j++) {
    if (i === 0) {
      Y[i][j] = j + 1;
    } else {
      Y[i][j] = Y[i - 1][j] + Y[i - 1][X[i - 1][j]];
    }
  }
}

for (let i = 0; i < Q; i++) {
  const [T, B] = input[i + 2].split(' ').map(Number);

  let sum = 0;
  let now = B - 1;
  for (let j = 0; j < 31; j++) {
    if ((T >> j) & 1) {
      sum += Y[j][now];
      now = X[j][now];
    }
  }
  console.log(sum);
}
