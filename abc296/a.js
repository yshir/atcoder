const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

for (let i = 0; i < N - 1; i++) {
  if ((S[i] === 'M' && S[i + 1] === 'F') || (S[i] === 'F' && S[i + 1] === 'M')) {
    //
  } else {
    console.log('No');
    return;
  }
}
console.log('Yes');
