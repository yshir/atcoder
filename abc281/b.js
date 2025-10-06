const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

if (/^[A-Z][1-9][0-9]{5}[A-Z]$/.test(S)) {
  console.log('Yes');
  return;
}

console.log('No');
