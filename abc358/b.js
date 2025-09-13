const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, A] = input[0].split(' ').map(Number);
const T = input[1].split(' ').map(Number);

let prev_t = 0;
for (let i = 0; i < N; i++) {
  const t = Math.max(prev_t, T[i]);
  console.log(t + A);
  prev_t = t + A;
}
