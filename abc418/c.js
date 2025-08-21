const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const total = A.reduce((acc, cur) => acc + cur, 0);
const max = Math.min(10 ** 6, total);

const sum = []; // 基準値以下の A[i] の総和
const cnt = []; // 基準値以下の A[i] を満たす i の個数

// 累積和
for (let i = 0; i <= max; i++) {
  sum[i] = 0;
  cnt[i] = 0;
}
for (let i = 0; i < N; i++) {
  sum[A[i]] += A[i];
  cnt[A[i]]++;
}
for (let i = 1; i <= max; i++) {
  sum[i] += sum[i - 1];
  cnt[i] += cnt[i - 1];
}

for (let i = 0; i < Q; i++) {
  const [b] = input[2 + i].split(' ').map(Number);
  const x = 1 + sum[b - 1] + (N - cnt[b - 1]) * (b - 1);
  if (x <= total) {
    console.log(x);
  } else {
    console.log(-1);
  }
}
