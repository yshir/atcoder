const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);

if (b - a === 1 || b - a === 9) {
  console.log('Yes');
} else {
  console.log('No');
}
