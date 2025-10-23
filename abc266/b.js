const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

const M = 998244353n;

let x = N - M;
if (x > M) {
  x -= M * (x / M);
}
if (x < 0n) {
  x += M * ((-x + M - 1n) / M);
}
console.log(x.toString());
