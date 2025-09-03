const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, c1, c2] = input[0].split(' ');
const S = input[1];

console.log([...S].map((x) => (x === c1 ? c1 : c2)).join(''));
