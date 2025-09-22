const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

console.log(
  '3.' +
    '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.substring(
      0,
      N
    )
);
