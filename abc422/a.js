const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b] = input[0].split('-').map(Number);

if (b === 8) {
  console.log([a + 1, 1].join('-'));
} else {
  console.log([a, b + 1].join('-'));
}
