const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

for (let i = 0; i < N; i++) {
  let ans = -1;
  for (let j = i - 1; j >= 0; j--) {
    if (A[i] < A[j]) {
      ans = j + 1;
      break;
    }
  }
  console.log(ans);
}
