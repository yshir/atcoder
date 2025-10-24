const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [L, R] = input[0].split(' ').map(Number);

console.log('atcoder'.substring(L - 1, R));
