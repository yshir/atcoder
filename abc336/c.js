const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

let x = N - 1n;
const a = [];
while (x > 0n) {
  a.push(x % 5n);
  x = x / 5n;
}

let ans = 0n;
for (let i = 0; i < a.length; i++) {
  ans += a[i] * 2n * 10n ** BigInt(i);
}
console.log(ans.toString());
