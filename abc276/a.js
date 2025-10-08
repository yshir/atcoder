const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let ans = -1;
for (let i = 0; i < S.length; i++) {
  if (S[i] == 'a') ans = i + 1;
}
console.log(ans);
