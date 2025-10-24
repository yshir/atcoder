const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1];
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (
      (A[i][j] === 'W' && A[j][i] !== 'L') || //
      (A[i][j] === 'L' && A[j][i] !== 'W') ||
      (A[i][j] === 'D' && A[j][i] !== 'D')
    ) {
      console.log('incorrect');
      return;
    }
  }
}

console.log('correct');
