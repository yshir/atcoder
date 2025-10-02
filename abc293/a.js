const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0].split('');

for (let i = 1; i <= S.length / 2; i++) {
  [S[2 * i - 1], S[2 * i - 2]] = [S[2 * i - 2], S[2 * i - 1]];
}

console.log(S.join(''));
