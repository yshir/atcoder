const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, C, D, E, F] = input[0].split(' ').map(BigInt);

console.log(((A * B * C - D * E * F) % 998244353n).toString());
