const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

A.sort((x, y) => (x[1] === y[1] ? x[0] - y[0] : x[1] - y[1]));

let cur = 0;
const maxL = [0];
for (let i = 0; i < N; i++) {
  const [l, r] = A[i];
  maxL[r] = cur = Math.max(cur, l);
}
for (let i = 1; i <= M; i++) {
  if (maxL[i] == null) {
    maxL[i] = maxL[i - 1];
  }
}

let ans = 0;

for (let r = M; r >= 1; r--) {
  ans += r - maxL[r];
}

console.log(ans);
