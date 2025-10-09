const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const H = input[1].split(' ').map(Number);

console.log(H.indexOf(Math.max(...H)) + 1);
