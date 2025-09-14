const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const A = input[0].split(' ').map(Number);
const B = input[1].split(' ').map(Number);

console.log(A.reduce((a, b) => a + b, 0) - B.reduce((a, b) => a + b, 0) + 1);
