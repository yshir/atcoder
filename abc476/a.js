const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const S = input[0];

if (S[S.length - 1] === 'e') {
  console.log(S + 'r');
} else {
  console.log(S + 'er');
}
