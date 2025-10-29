const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

if (S.length === new Set([...S]).size && S.toLowerCase() !== S && S.toUpperCase() !== S) {
  console.log('Yes');
} else {
  console.log('No');
}
