const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let i = 0;
for (let k = 0; k < N; k++) {
  while (S[i] === 'o' && i < N - 1) i++;
  console.log(i + 1);
  if (i < N - 1) i++;
}
