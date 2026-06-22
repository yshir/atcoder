const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, Y] = input[0].split(' ').map(Number);

if (9 * X === 16 * Y) {
  console.log('Yes');
} else {
  console.log('No');
}
