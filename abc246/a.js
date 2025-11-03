const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [x1, y1] = input[0].split(' ').map(Number);
const [x2, y2] = input[1].split(' ').map(Number);
const [x3, y3] = input[2].split(' ').map(Number);

let x4, y4;

if (x1 === x2) {
  x4 = x3;
}
if (x1 === x3) {
  x4 = x2;
}
if (x2 === x3) {
  x4 = x1;
}
if (y1 === y2) {
  y4 = y3;
}
if (y1 === y3) {
  y4 = y2;
}
if (y2 === y3) {
  y4 = y1;
}

console.log([x4, y4].join(' '));
