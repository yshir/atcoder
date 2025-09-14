const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const n = Number([...S].slice(3).join(''));
if (0 < n && n <= 349 && n !== 316) {
  console.log('Yes');
} else {
  console.log('No');
}
