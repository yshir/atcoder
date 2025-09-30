const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

A.sort((a, b) => a - b);
B.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += Math.abs(A[i] - B[i]);
}
console.log(sum);
