const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let upper = 0;
let lower = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === S[i].toUpperCase()) {
    upper++;
  } else {
    lower++;
  }
}

if (upper > lower) {
  console.log(S.toUpperCase());
} else {
  console.log(S.toLowerCase());
}
