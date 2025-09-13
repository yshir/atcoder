const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [S, T] = input[0].split(' ');

if (S === 'AtCoder' && T === 'Land') {
  console.log('Yes');
} else {
  console.log('No');
}
