const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

const len = Math.max(S.length, T.length);
for (let i = 0; i < len; i++) {
  if (S[i] !== T[i]) {
    console.log(i + 1);
    return;
  }
}
console.log(0);
