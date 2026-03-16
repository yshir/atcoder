const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

console.log([...S].every((s) => s === S[0]) ? 'Yes' : 'No');
