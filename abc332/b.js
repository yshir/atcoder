const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [K, G, M] = input[0].split(' ').map(Number);

let gg = 0;
let mm = 0;

for (let i = 0; i < K; i++) {
  if (gg === G) {
    gg = 0;
  } else if (mm === 0) {
    mm = M;
  } else {
    if (mm <= G - gg) {
      gg += mm;
      mm = 0;
    } else {
      mm -= G - gg;
      gg = G;
    }
  }
}
console.log([gg, mm].join(' '));
