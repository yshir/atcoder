const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [S] = input[0].split(' ');

console.log(
  new Set([
    S[0] + S[1] + S[2],
    S[0] + S[2] + S[1],
    S[1] + S[0] + S[2],
    S[1] + S[2] + S[0],
    S[2] + S[1] + S[0],
    S[2] + S[0] + S[1],
  ]).size
);
