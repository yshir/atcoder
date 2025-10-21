const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c, d, e] = input[0].split(' ').map(Number);

console.log(new Set([a, b, c, d, e]).size);
