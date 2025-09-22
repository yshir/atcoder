const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += A[i];
}

const low = Math.floor(sum / N);
const low_cnt = N - (sum % N);
const high = low + 1;
const high_cnt = sum % N;

A.sort((a, b) => a - b);

let ans = 0;
for (let i = 0; i < low_cnt; i++) {
  ans += Math.abs(A[i] - low);
}
for (let i = low_cnt; i < N; i++) {
  ans += Math.abs(A[i] - high);
}
console.log(ans / 2);
