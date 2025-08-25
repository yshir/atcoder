const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [...new Set(A)].sort((a, b) => a - b);
console.log(B.length);
console.log(B.join(' '));
