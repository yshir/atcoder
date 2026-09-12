const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const S = input[0];

let T = '';
for (let i = 0; i < S.length; i++) {
  if (i > 0) T += 'o';
  T += S[i];
}
console.log(T);
