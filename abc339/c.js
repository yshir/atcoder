const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let sum = 0n;
let min = 0n;
for (let i = 0; i < N; i++) {
  sum += BigInt(A[i]);
  min = min > sum ? sum : min;
}

const start = min < 0n ? min * -1n : 0n;
console.log((start + sum).toString());
