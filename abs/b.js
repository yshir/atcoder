const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
console.log((a * b) % 2 === 0 ? 'Even' : 'Odd');
