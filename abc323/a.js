const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

for (let i = 0; i < Math.floor(S.length / 2); i++) {
  if (S[i * 2 + 1] !== '0') {
    console.log('No');
    return;
  }
}
console.log('Yes');
