const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

A.sort((a, b) => a - b);

let ans = 0;
let r = 0;
for (let l = 0; l < N; l++) {
  while (r < N && A[r] - A[l] < M) {
    r++;
  }
  ans = Math.max(ans, r - l);
}
console.log(ans);
