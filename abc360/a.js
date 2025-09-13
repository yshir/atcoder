const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

console.log(S.indexOf('R') < S.indexOf('M') ? 'Yes' : 'No');
