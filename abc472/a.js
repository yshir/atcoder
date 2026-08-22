const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const S = input[0];

let T = '';
for (let i = 0; i < S.length; i++) {
  if (S[i] === 'A') {
    T += 'A';
  } else {
    T += '.';
  }
}
console.log(T);
