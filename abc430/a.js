const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, C, D] = input[0].split(' ').map(Number);

if (C < A || D >= B) {
  console.log('No');
} else {
  console.log('Yes');
}
