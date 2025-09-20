const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, Y] = input[0].split(' ').map(Number);

const d = (X + Y) % 12;
console.log(d === 0 ? 12 : d);
