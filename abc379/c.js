const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const X = input[1].split(' ').map(Number);
const A = input[2].split(' ').map(Number);

const B = Array(M)
  .fill(0)
  .map((_, i) => ({ idx: X[i], value: A[i] }))
  .sort((a, b) => a.idx - b.idx);

if (B[0].idx !== 1) {
  console.log(-1);
  return;
}

let cnt = 0n;
for (let i = 0; i < M - 1; i++) {
  const L = B[i + 1].idx - B[i].idx;
  if (B[i].value < L) {
    console.log(-1);
    return;
  }
  B[i + 1].value += B[i].value - L;

  cnt += (BigInt(L) * BigInt(L - 1)) / 2n + BigInt(B[i].value - L) * BigInt(L);
}

const L = N - B[M - 1].idx + 1;
if (B[M - 1].value !== L) {
  console.log(-1);
  return;
}
cnt += (BigInt(L) * BigInt(L - 1)) / 2n;

console.log(cnt.toString());
