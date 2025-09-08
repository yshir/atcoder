const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

let i = 0;
for (let j = 0; j < N; j++) {
  if (i >= j) {
    i = A[i][j] - 1;
  } else {
    i = A[j][i] - 1;
  }
}
console.log(i + 1);
