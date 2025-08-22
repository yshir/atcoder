const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const T = [...S];

let wait = false;
for (let i = 0; i < T.length; i++) {
  if (S[i] === '.') {
    if (!wait) {
      T[i] = 'o';
      wait = true;
    }
  }
  if (S[i] === '#') {
    wait = false;
  }
}
console.log(T.join(''));
