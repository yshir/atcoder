const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = 'oxx'.repeat(10 ** 5);

console.log(T.includes(S) ? 'Yes' : 'No');
