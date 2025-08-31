const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

for (let i = 0; i < N - 1; i++) {
  if (A[i] < A[i + 1]) {
    //
  } else {
    console.log('No');
    return;
  }
}
console.log('Yes');
