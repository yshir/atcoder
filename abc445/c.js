const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const d = 100;

const X = [];
for (let i = 0; i < d; i++) {
  X[i] = [];
  for (let j = 0; j < N; j++) {
    if (i === 0) {
      X[i][j] = A[j] - 1;
    } else {
      X[i][j] = X[i - 1][X[i - 1][j]];
    }
  }
}
console.log(X[X.length - 1].map((x) => x + 1).join(' '));
