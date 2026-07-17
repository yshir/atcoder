const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, D] = input[0].split(' ').map(BigInt);
const A = input[1].split(' ').map(BigInt);
const B = input[2].split(' ').map(BigInt);

A.sort((a, b) => (a - b < 0n ? -1 : 1));
B.sort((a, b) => (a - b < 0n ? -1 : 1));

const upper_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] <= n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

const abs = (a) => (a < 0n ? -a : a);
const max = (a, b) => (a < b ? b : a);

let ans = -1n;
for (let i = 0n; i < N; i += 1n) {
  const idx = upper_bound(B, A[i] + D);
  if (idx === 0) continue;
  const d = abs(B[idx - 1] - A[i]);
  if (d <= D) ans = max(ans, A[i] + B[idx - 1]);
}
console.log(ans.toString());
