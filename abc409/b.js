const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let max = 0;
for (let i = 1; i <= N; i++) {
  let cnt = 0;
  for (let j = 0; j < N; j++) {
    if (A[j] >= i) cnt++;
  }
  if (cnt >= i) max = i;
}
console.log(max);
