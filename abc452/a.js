const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [M, D] = input[0].split(' ').map(Number);

if (
  (M === 1 && D === 7) ||
  (M === 3 && D === 3) ||
  (M === 5 && D === 5) ||
  (M === 7 && D === 7) ||
  (M === 9 && D === 9) //
) {
  console.log('Yes');
} else {
  console.log('No');
}
