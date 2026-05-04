const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X] = input[0].split(' ').map(Number);

if (X >= 3 && X <= 18) {
  console.log('Yes');
} else {
  console.log('No');
}
