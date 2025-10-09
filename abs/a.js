const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a] = input[0].split(' ').map(Number);
const [b, c] = input[1].split(' ').map(Number);
const s = input[2];

console.log(a + b + c);
console.log(s);
