const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, D] = input[0].split(' ').map(Number);
const S = input[1];

const T = [...S];
for (let i = 0; i < D; i++) {
  for (let j = N - 1; j >= 0; j--) {
    if (T[j] === '@') {
      T[j] = '.';
      break;
    }
  }
}
console.log(T.join(''));
