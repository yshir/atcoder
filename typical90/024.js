const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

let a = 0;
for (let i = 0; i < N; i++) {
  a += Math.abs(A[i] - B[i]);
}

if (a <= K && (K - a) % 2 === 0) {
  console.log('Yes');
} else {
  console.log('No');
}
