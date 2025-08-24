const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const P = input[0];
const [L] = input[1].split(' ').map(Number);

console.log(P.length >= L ? 'Yes' : 'No');
