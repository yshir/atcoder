const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [A, B] = input[0].split(' ').map(BigInt);

let ans = 0n;
while (A !== B) {
  if (A < B) [A, B] = [B, A];
  if (A % B > 0) {
    ans += A / B;
    A = A % B;
  } else {
    ans += A / B - 1n;
    break;
  }
}
console.log(ans.toString());
