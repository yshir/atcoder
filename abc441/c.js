const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K, X] = input[0].split(' ').map(Number);
let A = input[1].split(' ').map(Number);

A.sort((x, y) => x - y);
A = A.slice(0, K);
A.sort((x, y) => y - x);

let sum = 0;
for (let i = 0; i < K; i++) {
  sum += A[i];
  if (sum >= X) {
    console.log(i + 1 + (N - K));
    return;
  }
}
console.log(-1);
