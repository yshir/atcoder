const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = [];
  for (let j = 0; j < N; j++) {
    A[i][j] = i === j;
  }
}

for (let i = 0; i < M; i++) {
  const [k, ...x] = input[i + 1].split(' ').map(Number);

  for (let j = 0; j < k; j++) {
    for (let m = 0; m < k; m++) {
      A[x[j] - 1][x[m] - 1] = true;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!A[i][j]) {
      console.log('No');
      return;
    }
  }
}
console.log('Yes');
