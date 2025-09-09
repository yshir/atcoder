const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [...A].sort((a, b) => b - a);
for (let i = 0; i < N; i++) {
  if (A[i] === B[1]) {
    console.log(i + 1);
    return;
  }
}
