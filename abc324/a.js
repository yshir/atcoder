const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let x = A[0];
for (let i = 1; i < N; i++) {
  if (x !== A[i]) {
    console.log('No');
    return;
  }
}
console.log('Yes');
