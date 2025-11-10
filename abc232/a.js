const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, , b] = input[0];

console.log(a * b);
