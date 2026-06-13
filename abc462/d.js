const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, D] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < 10 ** 6 + 1; i++) A[i] = 0;

for (let i = 0; i < N; i++) {
  let [s, t] = input[i + 1].split(' ').map(Number);
  s--;
  t--;

  if (t - s >= D) {
    A[s]++;
    A[t - D + 1]--;
  }
}

for (let i = 0; i < A.length - 1; i++) {
  A[i + 1] += A[i];
}

let cnt = 0n;
for (let i = 0; i < A.length; i++) {
  if (A[i] >= 2) {
    cnt += (BigInt(A[i]) * BigInt(A[i] - 1)) / 2n;
  }
}
console.log(cnt.toString());
