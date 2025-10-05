const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let cnt = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === '0' && S[i + 1] === '0') {
    i++;
    cnt++;
  } else {
    cnt++;
  }
}
console.log(cnt);
