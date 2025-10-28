const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);

const A = [];
A[0] = input[1].split(' ').map(Number);
A[1] = input[2].split(' ').map(Number);

console.log(A[R - 1][C - 1]);
