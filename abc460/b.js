let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

while (T--) {
  const [x1, y1, r1, x2, y2, r2] = input[line++].split(' ').map(BigInt);

  const a = (x1 - x2) ** 2n + (y1 - y2) ** 2n <= (r1 + r2) ** 2n;
  const b = (x1 - x2) ** 2n + (y1 - y2) ** 2n >= (r1 - r2) ** 2n;

  if (a && b) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
