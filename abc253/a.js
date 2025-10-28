const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c] = input[0].split(' ').map(Number);

console.log((a <= b && b <= c) || (c <= b && b <= a) ? 'Yes' : 'No');
