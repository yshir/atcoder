const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let ans = (BigInt(K) * BigInt(K + 1)) / 2n;
for (const n of [...new Set(A)]) {
  if (n <= K) {
    ans -= BigInt(n);
  }
}
console.log(ans.toString());
