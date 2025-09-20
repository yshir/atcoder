const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, Y] = input[0].split(' ').map(Number);

if (X - 3 <= Y && Y <= X + 2) {
  console.log('Yes');
} else {
  console.log('No');
}
