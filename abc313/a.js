const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);

let max = 0;
for (let i = 1; i < N; i++) {
  max = Math.max(max, P[i]);
}

console.log(Math.max(0, max - P[0] + 1));
