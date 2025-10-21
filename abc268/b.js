const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

console.log(T.startsWith(S) ? 'Yes' : 'No');
