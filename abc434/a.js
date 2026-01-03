const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [W, B] = input[0].split(' ').map(Number);

console.log(Math.ceil((W * 1000 + 1) / B));
