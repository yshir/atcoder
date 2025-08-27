const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].trim().split(' ').map(Number);

const A = Array(N + 1).fill(1);
const mod = 10 ** 9;
let sum = K;

for (let i = K; i <= N; i++) {
  A[i] = sum;
  sum += A[i];
  sum -= A[i - K];
  sum += mod;
  sum %= mod;
}

console.log(A[N]);
