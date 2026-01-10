const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1]
  .split(' ')
  .map(Number)
  .sort((x, y) => x - y);
const B = input[2]
  .split(' ')
  .map(Number)
  .sort((x, y) => x - y);

const B_cum = [...B];
for (let i = 0; i < M - 1; i++) {
  B_cum[i + 1] += B_cum[i];
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

let idx = 0;
let ans = 0;
for (let i = 0; i < N; i++) {
  while (A[i] > B[idx] && idx < M) {
    idx++;
  }

  if (idx > 0) {
    ans += A[i] * idx - B_cum[idx - 1];
  }
  if (idx < M) {
    ans += B_cum[M - 1] - (B_cum[idx - 1] || 0) - A[i] * (M - idx);
  }

  ans = ans % 998244353;
}

console.log(ans);
