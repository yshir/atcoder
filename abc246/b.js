const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);

const theta = Math.atan2(B, A);
console.log([Math.cos(theta), Math.sin(theta)].join(' '));
