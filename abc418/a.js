const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[1];

console.log(S.endsWith('tea') ? 'Yes' : 'No');
