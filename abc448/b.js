const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const C = input[1].split(' ').map(Number);

let ans = 0;
for (let i = 0; i < N; i++) {
  const [A, B] = input[i + 2].split(' ').map(Number);
  const x = Math.min(C[A - 1], B);
  ans += x;
  C[A - 1] -= x;
}
console.log(ans);
