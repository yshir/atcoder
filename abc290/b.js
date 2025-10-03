const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const S = input[1];

const T = [];
let cnt = 0;
for (let i = 0; i < N; i++) {
  if (S[i] === 'o') {
    cnt++;
    if (cnt <= K) {
      T[i] = 'o';
      continue;
    }
  }
  T[i] = 'x';
}

console.log(T.join(''));
