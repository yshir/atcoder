const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) S[i] = input[i + 1];

let cnt = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    let ok = true;
    for (let k = 0; k < M; k++) {
      if (S[i][k] === 'x' && S[j][k] === 'x') {
        ok = false;
        break;
      }
    }
    if (ok) cnt++;
  }
}
console.log(cnt);
