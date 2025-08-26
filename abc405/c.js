const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(BigInt);

const B = [...A];
for (let i = N - 1; i > 0; i--) {
  B[i - 1] += B[i];
}

let sum = BigInt(0);
for (let i = 0; i < N - 1; i++) {
  sum += A[i] * B[i + 1];
}
console.log(sum.toString());
