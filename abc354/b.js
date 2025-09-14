const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const S = [];
let T = 0;
for (let i = 0; i < N; i++) {
  const x = input[i + 1].split(' ');
  S[i] = x[0];
  T += Number(x[1]);
}
S.sort();
console.log(S[T % N]);
