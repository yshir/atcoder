const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1].split(' ').map(Number);

const ans = [];
for (let i = 0; i < N; i++) {
  ans[i] = S[i] - (S[i - 1] || 0);
}
console.log(ans.join(' '));
