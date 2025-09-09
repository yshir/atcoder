const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X] = input[0].split(' ').map(Number);

console.log(X);
