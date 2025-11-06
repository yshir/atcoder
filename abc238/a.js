const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n] = input[0].split(' ').map(Number);

console.log(2 ** n > n ** 2 ? 'Yes' : 'No');
