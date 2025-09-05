const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const A = [];
let cur = 0;
for (let i = 1; i < S.length; i++) {
  if (S[i] === '-') {
    cur++;
  } else {
    A.push(cur);
    cur = 0;
  }
}
console.log(A.join(' '));
