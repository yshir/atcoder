const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c] = input[0].split(' ').map(BigInt);

console.log(a < c ** b ? 'Yes' : 'No');
