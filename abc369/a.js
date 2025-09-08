const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);

if (A === B) {
  console.log(1);
} else if (Math.abs(A - B) % 2 === 1) {
  console.log(2);
} else {
  console.log(3);
}
