const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [S, T] = input[0].split(' ');

console.log(S < T ? 'Yes' : 'No');
