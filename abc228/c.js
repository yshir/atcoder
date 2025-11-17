const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

const P = [];
const Q = [];
for (let i = 0; i < N; i++) {
  P[i] = input[i + 1]
    .split(' ')
    .map(Number)
    .reduce((a, b) => a + b, 0);
  Q[i] = P[i];
}
Q.sort((a, b) => b - a);
for (let i = 0; i < N; i++) {
  if (Q[K - 1] - 300 <= P[i]) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
