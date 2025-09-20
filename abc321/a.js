const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const S = [...String(N)].map(Number);
for (let i = 0; i < S.length - 1; i++) {
  if (S[i] <= S[i + 1]) {
    console.log('No');
    return;
  }
}
console.log('Yes');
