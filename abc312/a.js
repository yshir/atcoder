const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

if (['ACE', 'BDF', 'CEG', 'DFA', 'EGB', 'FAC', 'GBD'].includes(S)) {
  console.log('Yes');
} else {
  console.log('No');
}
