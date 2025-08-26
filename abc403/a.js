const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < N; i++) {
  if (i % 2 === 0) sum += A[i];
}
console.log(sum);
