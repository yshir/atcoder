const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, X, T, D] = input[0].split(' ').map(Number);

if (X <= M) {
  console.log(T);
} else {
  const A = T - X * D;
  console.log(A + M * D);
}
