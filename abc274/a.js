const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);

console.log((B / A).toFixed(3));
