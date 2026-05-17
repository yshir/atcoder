const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let cnt = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === 'C') {
    cnt += Math.min(i + 1, S.length - i);
  }
}
console.log(cnt);
