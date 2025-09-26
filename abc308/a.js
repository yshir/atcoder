const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0].split(' ').map(Number);

for (let i = 0; i < S.length - 1; i++) {
  if (S[i] > S[i + 1]) {
    console.log('No');
    return;
  }
}

for (let i = 0; i < S.length; i++) {
  if (S[i] < 100 || S[i] > 675 || S[i] % 25 !== 0) {
    console.log('No');
    return;
  }
}

console.log('Yes');
