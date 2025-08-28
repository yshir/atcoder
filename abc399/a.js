const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];
const T = input[2];

let cnt = 0;
for (let i = 0; i < N; i++) {
  if (S[i] !== T[i]) cnt++;
}
console.log(cnt);
