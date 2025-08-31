const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let next = 'i';
let cnt = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === next) {
    next = next === 'i' ? 'o' : 'i';
  } else {
    cnt++;
  }
}
if (S[S.length - 1] === 'i') cnt++;
console.log(cnt);
