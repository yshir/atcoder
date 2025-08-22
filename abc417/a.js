const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, A, B] = input[0].split(' ').map(Number);
const S = input[1];

console.log(S.substring(A, N - B));
