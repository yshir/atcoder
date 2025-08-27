const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A] = input[0].split(' ').map(Number);

if (400 % A === 0) {
  console.log(400 / A);
} else {
  console.log(-1);
}
