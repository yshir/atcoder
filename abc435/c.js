const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let max = 0;
for (let i = 0; i < N; i++) {
  if (i > max) {
    break;
  }
  max = Math.min(Math.max(max, i + A[i] - 1), N - 1);
}
console.log(max + 1);
