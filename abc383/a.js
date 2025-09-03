const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let ans = 0;
let prev_t = 0;
for (let i = 0; i < N; i++) {
  const [t, v] = input[i + 1].split(' ').map(Number);
  ans -= t - prev_t;
  ans = Math.max(0, ans);
  ans += v;
  prev_t = t;
}
console.log(ans);
