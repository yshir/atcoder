const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(alpha[Math.floor((X - 1) / N)]);
