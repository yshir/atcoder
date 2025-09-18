const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, S, K] = input[0].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < N; i++) {
  const [P, Q] = input[i + 1].split(' ').map(Number);
  sum += P * Q;
}

if (sum < S) {
  sum += K;
}
console.log(sum);
