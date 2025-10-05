const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);

if (a * 2 === b || a * 2 + 1 === b) {
  console.log('Yes');
} else {
  console.log('No');
}
