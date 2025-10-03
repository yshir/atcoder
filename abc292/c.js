const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const ab_cnt = Array(N + 1).fill(0);
for (let a = 1; a <= N; a++) {
  for (let b = 1; a * b <= N; b++) {
    ab_cnt[a * b]++;
  }
}

let cnt = 0;
for (let ab = 1; ab <= N; ab++) {
  cnt += ab_cnt[ab] * ab_cnt[N - ab];
}
console.log(cnt);
