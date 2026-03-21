const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [D] = input[0].split(' ').map(Number);

const a = D / 2;
console.log(a * a * Math.PI);
