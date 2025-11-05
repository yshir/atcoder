const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H] = input[0].split(' ').map(Number);

console.log(Math.sqrt(H * (12800000 + H)));
