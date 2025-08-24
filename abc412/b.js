const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

let ok = true;
for (let i = 1; i < S.length; i++) {
  if (S[i].toUpperCase() === S[i]) {
    if (!T.includes(S[i - 1])) {
      ok = false;
      break;
    }
  }
}
console.log(ok ? 'Yes' : 'No');
