const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

A.sort((a, b) => a - b);

if (K === 1) {
  console.log(0);
  return;
}

if (K % 2 === 0) {
  let sum = 0;
  for (let i = 0; i < Math.floor(K / 2); i++) {
    sum += A[i * 2 + 1] - A[i * 2];
  }
  console.log(sum);
  return;
}

let sum = 0;
for (let i = 2; i < K; i += 2) {
  sum += A[i] - A[i - 1];
}
let ans = sum;
for (let i = 2; i < K; i += 2) {
  sum -= A[i] - A[i - 1];
  sum += A[i - 1] - A[i - 2];
  ans = Math.min(ans, sum);
}
console.log(ans);
