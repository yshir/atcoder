const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

const a = 2n ** 31n;
console.log(-a <= N && N < a ? 'Yes' : 'No');
