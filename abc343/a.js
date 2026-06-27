const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);

if (a + b === 1) {
  console.log(2);
} else {
  console.log(1);
}
