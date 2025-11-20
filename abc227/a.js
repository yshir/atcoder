const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K, A] = input[0].split(' ').map(Number);

console.log(((A + K - 2) % N) + 1);
