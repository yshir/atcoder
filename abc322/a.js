const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

for (let i = 0; i < N - 2; i++) {
  if (S[i] === 'A' && S[i + 1] === 'B' && S[i + 2] === 'C') {
    console.log(i + 1);
    return;
  }
}
console.log(-1);
