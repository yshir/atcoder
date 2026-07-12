const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, P] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(BigInt);
const B = input[2].split(' ').map(BigInt);

B.sort((a, b) => (a - b < 0n ? -1 : 1));

const B_acc = [...B];
for (let i = 1; i < M; i++) {
  B_acc[i] += B_acc[i - 1];
}

const lower_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] < n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

let ans = 0n;
for (let i = 0; i < N; i++) {
  const idx = lower_bound(B, BigInt(P) - A[i]);
  if (idx < M) ans += BigInt(M - idx) * BigInt(P);
  if (idx > 0) ans += B_acc[idx - 1] + BigInt(idx) * A[i];
}
console.log(ans.toString());
