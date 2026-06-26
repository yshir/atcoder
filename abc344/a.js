const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0].split('|');

console.log(S[0] + S[S.length - 1]);
