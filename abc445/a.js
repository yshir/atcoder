const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

if (S[0] === S[S.length - 1]) {
  console.log('Yes');
} else {
  console.log('No');
}
