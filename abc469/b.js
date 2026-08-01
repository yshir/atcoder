const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let ans = 0;
for (let i = 0; i < N; i++) {
  if (S[i] === 'x' && (S[i - 1] || 'x') === 'x' && (S[i + 1] || 'x') === 'x') {
    ans++;
  }
}
console.log(ans);
