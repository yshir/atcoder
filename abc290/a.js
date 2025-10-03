const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < M; i++) {
  sum += A[B[i] - 1];
}
console.log(sum);
