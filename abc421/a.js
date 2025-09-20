const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) S[i] = input[i + 1];
const [X, Y] = input[1 + N].split(' ');

if (S[Number(X) - 1] === Y) {
  console.log('Yes');
} else {
  console.log('No');
}
