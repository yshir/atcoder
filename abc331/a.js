const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [M, D] = input[0].split(' ').map(Number);
const [y, m, d] = input[1].split(' ').map(Number);

let yy = y;
let mm = m;
let dd = d + 1;

if (dd > D) {
  dd = 1;
  mm++;
}
if (mm > M) {
  mm = 1;
  yy++;
}

console.log([yy, mm, dd].join(' '));
