const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = Number(input[0]);

if (200 <= S && S <= 299) {
  console.log('Success');
} else {
  console.log('Failure');
}
