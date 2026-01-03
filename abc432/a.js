const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, C] = input[0].split(' ').map(Number);

console.log([A, B, C].sort((a, b) => b - a).join(''));
