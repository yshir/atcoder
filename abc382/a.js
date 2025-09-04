const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, D] = input[0].split(' ').map(Number);
const S = input[1];

console.log([...S].filter((x) => x === '.').length + D);
