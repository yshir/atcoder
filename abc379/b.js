const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const S = input[1];

let cnt = 0;
let i = 0;
while (i < N) {
  if (S[i] === 'O') {
    let ok = true;
    let j;
    for (j = 0; j < K; j++) {
      if (i + j === N || S[i + j] !== 'O') {
        ok = false;
        break;
      }
    }
    i += j;
    if (ok) cnt++;
  } else {
    i++;
  }
}
console.log(cnt);
