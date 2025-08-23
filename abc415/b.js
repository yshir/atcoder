const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let A = [];
for (let i = 0; i < S.length; i++) {
  if (S[i] === '#') {
    A.push(i + 1);
    if (A.length === 2) {
      console.log(A.join(','));
      A = [];
    }
  }
}
