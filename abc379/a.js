const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const S = [...String(N)];
console.log(S[1] + S[2] + S[0]);
console.log(S[2] + S[0] + S[1]);
