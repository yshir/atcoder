const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(BigInt);

for (let i = 0; i < N - 2; i++) {
  if (A[i + 1] * A[i + 1] !== A[i] * A[i + 2]) {
    console.log('No');
    return;
  }
}
console.log('Yes');
