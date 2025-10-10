const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, C] = input[0].split(' ').map(Number);

console.log(1000 * Math.floor(X / (1000 + C)));
