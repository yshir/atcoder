const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ');

for (let i = 0; i < Math.min(A.length, B.length); i++) {
  if (Number(A[A.length - 1 - i]) + Number(B[B.length - 1 - i]) >= 10) {
    console.log('Hard');
    return;
  }
}
console.log('Easy');
