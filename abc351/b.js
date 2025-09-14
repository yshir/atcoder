const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
const B = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split('');
  B[i] = input[i + N + 1].split('');
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (A[i][j] !== B[i][j]) {
      console.log([i + 1, j + 1].join(' '));
      return;
    }
  }
}
