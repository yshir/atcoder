const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, D] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) S[i] = input[i + 1].split('');

let ans = 0;
let cur = 0;
for (let i = 0; i < D; i++) {
  let ok = true;
  for (let j = 0; j < N; j++) {
    if (S[j][i] === 'x') {
      ok = false;
      break;
    }
  }
  if (ok) {
    cur++;
  } else {
    cur = 0;
  }
  ans = Math.max(ans, cur);
}
console.log(ans);
