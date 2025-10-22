const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let s = '';
let n = N;
while (n > 0) {
  s = [...'0123456789ABCDEF'][n % 16] + s;
  n = Math.floor(n / 16);
}
console.log(s.padStart(2, '0'));
