const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const [a, b] = S.split('x');
console.log(a * b);
