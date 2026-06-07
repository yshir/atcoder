const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, D] = input[0].split(' ').map(Number);

console.log(D >= A ? 'Yes' : 'No');
