const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const a = N - (N % 5);
const b = a + 5;

console.log(b - N >= N - a ? a : b);
