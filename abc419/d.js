const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = input[1];
const T = input[2];

const A = [];
for (let i = 0; i <= N; i++) A[i] = 0;

for (let i = 0; i < M; i++) {
  const [l, r] = input[3 + i]
    .split(' ')
    .map(Number)
    .map((x) => x - 1);
  A[l]++;
  A[r + 1]--;
}

for (let i = 0; i < N; i++) {
  A[i + 1] += A[i];
}

const ans = [];
for (let i = 0; i < N; i++) {
  if (A[i] % 2 === 0) {
    ans[i] = S[i];
  } else {
    ans[i] = T[i];
  }
}
console.log(ans.join(''));
