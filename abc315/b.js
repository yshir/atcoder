const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [M] = input[0].split(' ').map(Number);
const D = input[1].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < M; i++) {
  sum += D[i];
}

const half = Math.ceil(sum / 2);

let m = 1;
let d = 1;
let dd = 1;
while (true) {
  if (dd === half) {
    console.log([m, d].join(' '));
    return;
  }
  if (D[m - 1] === d) {
    m++;
    d = 1;
  } else {
    d++;
  }
  dd++;
}
