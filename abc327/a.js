const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

for (let i = 0; i < N - 1; i++) {
  if (S[i] === 'a' && S[i + 1] === 'b') {
    console.log('Yes');
    return;
  }
  if (S[i] === 'b' && S[i + 1] === 'a') {
    console.log('Yes');
    return;
  }
}
console.log('No');
