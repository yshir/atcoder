const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);

const Q = [];
for (let i = 0; i < N; i++) {
  Q[P[i] - 1] = i + 1;
}
console.log(Q.join(' '));
