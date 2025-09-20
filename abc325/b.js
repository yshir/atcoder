const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let ans = 0;

for (let h = 0; h < 24; h++) {
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    const [w, x] = input[i + 1].split(' ').map(Number);
    const hh = (h + x) % 24;
    if (9 <= hh && hh <= 17) {
      cnt += w;
    }
  }
  ans = Math.max(ans, cnt);
}
console.log(ans);
