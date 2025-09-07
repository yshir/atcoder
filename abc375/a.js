const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let cnt = 0;
for (let i = 0; i < N - 2; i++) {
  if (S[i] === '#' && S[i + 1] === '.' && S[i + 2] === '#') cnt++;
}
console.log(cnt);
