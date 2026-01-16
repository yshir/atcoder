const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const P = input[0].split(' ').map(Number);

console.log(P.map((x) => 'abcdefghijklmnopqrstuvwxyz'[x - 1]).join(''));
