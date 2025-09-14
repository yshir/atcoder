const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

let i = 0;
const ans = [];
for (let j = 0; j < T.length; j++) {
  if (S[i] === T[j]) {
    ans.push(j + 1);
    i++;
  }
}
console.log(ans.join(' '));
