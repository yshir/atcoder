const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const T = input[1].split(' ').map(Number);

const A = Array(N).fill(true);
for (let i = 0; i < Q; i++) {
  A[T[i] - 1] = !A[T[i] - 1];
}
console.log(A.filter((x) => x).length);
