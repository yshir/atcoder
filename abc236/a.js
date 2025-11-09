const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0].split('');
const [a, b] = input[1].split(' ').map(Number);

[S[a - 1], S[b - 1]] = [S[b - 1], S[a - 1]];
console.log(S.join(''));
