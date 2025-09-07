const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const C = A.sort((a, b) => a - b);
const D = B.sort((a, b) => a - b);
console.log(C[N - 1] + D[N - 1]);
