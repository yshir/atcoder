const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let l = 0;
for (let i = 1; i <= N; i++) {
  console.log(A[l] - i);
  if (A[l] === i) {
    l++;
  }
}
