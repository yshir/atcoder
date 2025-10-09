const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [0];
for (let i = 0; i < N; i++) {
  const v = B[A[i] - 1];
  B.push(v + 1);
  B.push(v + 1);
}

console.log(B.join('\n'));
