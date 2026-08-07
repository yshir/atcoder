const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  A.push(b);
  A.push(a - b);
}
A.sort((x, y) => y - x);

let ans = 0;
for (let i = 0; i < K; i++) {
  ans += A[i];
}
console.log(ans);
