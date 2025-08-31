const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let ans = null;
const map = {};
for (let i = 0; i < N; i++) {
  if (map[A[i]] !== undefined) {
    if (ans === null || ans > i - map[A[i]] + 1) {
      ans = i - map[A[i]] + 1;
    }
  }
  map[A[i]] = i;
}

if (ans !== null) {
  console.log(ans);
} else {
  console.log(-1);
}
