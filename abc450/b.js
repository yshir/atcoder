let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[line++].split(' ').map(Number);

const C = [];
for (let i = 0; i < N; i++) {
  C[i] = [];
  for (let j = 0; j < N; j++) {
    C[i][j] = 0;
  }
}

for (let i = 0; i < N - 1; i++) {
  C[i] = input[line++].split(' ').map(Number);
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const a_to_b = C[i][j - i - 1];
      const b_to_c = C[j][k - j - 1];
      const a_to_c = C[i][k - i - 1];

      if (a_to_b + b_to_c < a_to_c) {
        console.log('Yes');
        return;
      }
    }
  }
}

console.log('No');
