const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = [];
  for (let j = 0; j < i + 1; j++) {
    if (j === 0 || j === i) {
      A[i][j] = 1;
    } else {
      A[i][j] = A[i - 1][j - 1] + A[i - 1][j];
    }
  }
  console.log(A[i].join(' '));
}
