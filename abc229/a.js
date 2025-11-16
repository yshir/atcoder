const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S1 = input[0];
const S2 = input[1];

if ((S1 === '#.' && S2 === '.#') || (S1 === '.#' && S2 === '#.')) {
  console.log('No');
} else {
  console.log('Yes');
}
