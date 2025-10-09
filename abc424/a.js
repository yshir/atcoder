const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c] = input[0].split(' ').map(Number);

if (
  a === b || //
  a === c ||
  b === c
) {
  console.log('Yes');
} else {
  console.log('No');
}
