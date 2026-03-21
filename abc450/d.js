const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

for (let i = 0; i < N; i++) {
  A[i] = A[i] % K;
}

A.sort((x, y) => x - y);

let l = 0;
let r = N - 1;

let ans = A[r] - A[l];
for (let i = 0; i < N; i++) {
  A.push(A[l] + K);
  l++;
  r++;
  ans = Math.min(ans, A[r] - A[l]);
}
console.log(ans);
