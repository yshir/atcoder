const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

if (S.length === 1) {
  console.log(S.repeat(6));
}
if (S.length === 2) {
  console.log(S.repeat(3));
}
if (S.length === 3) {
  console.log(S.repeat(2));
}
