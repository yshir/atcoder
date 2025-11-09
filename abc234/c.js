const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [K] = input[0].split(' ').map(BigInt);

let s = '';
let n = K;
while (n > 0n) {
  s = (n & 1n ? '2' : '0') + s;
  n = n >> 1n;
}
console.log(s);
