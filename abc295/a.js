const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const W = input[1].split(' ');

const S = ['and', 'not', 'that', 'the', 'you'];

for (let i = 0; i < N; i++) {
  if (S.includes(W[i])) {
    console.log('Yes');
    return;
  }
}
console.log('No');
