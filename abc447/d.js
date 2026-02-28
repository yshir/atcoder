const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let a = 0;
let b = 0;
let c = 0;

for (let i = 0; i < S.length; i++) {
  if (S[i] === 'A') {
    a++;
  }
  if (S[i] === 'B') {
    b = Math.min(b + 1, a);
  }
  if (S[i] === 'C') {
    c = Math.min(c + 1, b, a);
  }
}

console.log(c);
