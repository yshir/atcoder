const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, P, Q] = input[0].split(' ').map(Number);
const D = input[1].split(' ').map(Number);

const min = Math.min(...D);
console.log(Math.min(P, Q + min));
