const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const S = input[0];

const A = 'BYR';

console.log(A[(A.indexOf(S) + 1) % A.length]);
