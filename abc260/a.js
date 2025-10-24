const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

if (S[0] === S[1] && S[1] === S[2]) {
  console.log(-1);
} else if (S[0] === S[1]) {
  console.log(S[2]);
} else if (S[1] === S[2]) {
  console.log(S[0]);
} else if (S[0] === S[2]) {
  console.log(S[1]);
} else {
  console.log(S[0]);
}
