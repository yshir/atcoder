const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c] = input[0].split(' ').map(Number);

if (a * b === c || a * c === b || b * a === c || b * c === a || c * a === b || c * b === a) {
  console.log('Yes');
} else {
  console.log('No');
}
