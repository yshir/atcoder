const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

console.log(M >= A.reduce((acc, cur) => acc + cur, 0) ? 'Yes' : 'No');
