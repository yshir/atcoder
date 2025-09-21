const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ').map(BigInt);

console.log((A ** B + B ** A).toString());
