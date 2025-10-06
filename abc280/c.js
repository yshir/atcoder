const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

for (let i = 0; i < T.length; i++) {
  if ((S[i] || '') !== T[i]) {
    console.log(i + 1);
    return;
  }
}
