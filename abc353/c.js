const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let ans = 0n;
for (let i = 0; i < N; i++) {
  ans += BigInt(A[i]);
}
ans *= BigInt(N - 1);

const lower_bound = (arr, n, first = 0) => {
  let last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] < n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

A.sort((a, b) => a - b);
let cnt = 0;
for (let i = 0; i < N - 1; i++) {
  const target = 10 ** 8 - A[i];
  const target_idx = lower_bound(A, target, i + 1);
  cnt += N - target_idx;
}
ans -= BigInt(cnt) * BigInt(10 ** 8);
console.log(ans.toString());
