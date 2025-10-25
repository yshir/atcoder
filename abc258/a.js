const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [K] = input[0].split(' ').map(Number);

let h = 21;
let m = 0;

m += K;
if (m >= 60) {
  m -= 60;
  h += 1;
}
if (h >= 24) {
  h = 0;
}

console.log([h.toString().padStart(2, '0'), m.toString().padStart(2, '0')].join(':'));
