const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const x = N >= 42 ? N + 1 : N;

console.log(`AGC${x.toString().padStart(3, '0')}`);
