let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[line++].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  const [l, ...a] = input[line++].split(' ').map(Number);
  A[i] = a;
}
const [X, Y] = input[line++].split(' ').map(Number);

console.log(A[X - 1][Y - 1]);
