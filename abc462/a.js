const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let T = '';
for (let i = 0; i < S.length; i++) {
  if ([...'0123456789'].includes(S[i])) {
    T += S[i];
  }
}
console.log(T);
