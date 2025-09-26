const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let t = '';
for (let i = 0; i < N; i++) {
  t += S[i] + S[i];
}
console.log(t);
