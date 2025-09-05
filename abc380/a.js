const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const s = [...String(N)];

if (
  s.filter((x) => x === '1').length === 1 &&
  s.filter((x) => x === '2').length === 2 &&
  s.filter((x) => x === '3').length === 3
) {
  console.log('Yes');
} else {
  console.log('No');
}
