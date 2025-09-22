const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

A.sort((a, b) => a - b);

for (let i = 0; i < N - 1; i++) {
  if (A[i + 1] - A[i] !== 1) {
    console.log(A[0] + i + 1);
    return;
  }
}
