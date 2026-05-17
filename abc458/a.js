const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const [N] = input[1].split(' ').map(Number);

const ans = [];
for (let i = N; i < S.length - N; i++) {
  ans.push(S[i]);
}
console.log(ans.join(''));
