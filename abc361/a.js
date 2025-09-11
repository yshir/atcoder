const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K, X] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

console.log([...A.slice(0, K), ...[X], ...A.slice(K)].join(' '));
