const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

if (
  S[0] + S[1] + S[2] === 'ABC' ||
  S[0] + S[2] + S[1] === 'ABC' ||
  S[1] + S[0] + S[2] === 'ABC' ||
  S[1] + S[2] + S[0] === 'ABC' ||
  S[2] + S[1] + S[0] === 'ABC' ||
  S[2] + S[0] + S[1] === 'ABC'
) {
  console.log('Yes');
} else {
  console.log('No');
}
