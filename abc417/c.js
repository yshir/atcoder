const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const cnt = [];
for (let i = 0; i < N; i++) {
  cnt[i] = 0;
}
for (let i = 0; i < N; i++) {
  cnt[i + A[i]]++;
}

let ans = 0;
for (let i = 0; i < N; i++) {
  ans += cnt[i - A[i]] || 0;
}
console.log(ans);
