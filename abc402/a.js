const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let T = '';
for (let i = 0; i < S.length; i++) {
  if (S[i].toUpperCase() === S[i]) {
    T += S[i];
  }
}
console.log(T);
