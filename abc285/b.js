const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

for (let i = 1; i < N; i++) {
  let l;
  for (l = 1; l + i <= N; l++) {
    if (S[l - 1] === S[l - 1 + i]) {
      break;
    }
  }
  console.log(l - 1);
}
