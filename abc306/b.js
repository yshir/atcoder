const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const A = input[0].split(' ').map(BigInt);

let ans = 0n;
for (let i = 0; i < A.length; i++) {
  ans += A[i] * 2n ** BigInt(i);
}
console.log(ans.toString());
