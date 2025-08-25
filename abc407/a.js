const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);

const C = A / B;
const x = Math.trunc(C);
const y = Math.trunc(C) + 1;

console.log(C - x > y - C ? y : x);
