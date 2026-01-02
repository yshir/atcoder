const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [S, A, B, X] = input[0].split(' ').map(Number);

let t = 0;
let ans = 0;
while (1) {
  const remain = Math.max(X - t, 0);
  if (remain < A) {
    ans += remain * S;
    break;
  }
  t += A + B;
  ans += A * S;
}
console.log(ans);
