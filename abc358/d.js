const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

A.sort((x, y) => x - y);
B.sort((x, y) => x - y);

let j = 0;
let ans = 0;
for (let i = 0; i < M; i++) {
  while (A[j] < B[i] && j < N) j++;
  if (j === N) {
    console.log(-1);
    return;
  }
  ans += A[j];
  j++;
}
console.log(ans);
