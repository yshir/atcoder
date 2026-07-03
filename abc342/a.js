const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0].split('');

if (S[0] === S[1]) {
  for (let i = 2; i < S.length; i++) {
    if (S[0] !== S[i]) {
      console.log(i + 1);
      return;
    }
  }
} else {
  console.log(S[0] === S[2] ? 2 : 1);
}
