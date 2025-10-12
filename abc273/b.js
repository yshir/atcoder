const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, K] = input[0].split(' ').map(BigInt);

let n = X;
for (let i = 0n; i < K; i++) {
  let t = (n / 10n ** i) % 10n;
  if (t < 5) {
    n = (n / 10n ** (i + 1n)) * 10n ** (i + 1n);
  } else {
    n = (n / 10n ** (i + 1n) + 1n) * 10n ** (i + 1n);
  }
}
console.log(n.toString());
