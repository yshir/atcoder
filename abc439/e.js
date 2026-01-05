const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const C = [];
for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  C[i] = { a, b };
}
C.sort((x, y) => (x.a === y.a ? y.b - x.b : x.a - y.a));

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

// LIS
const dp = [C[0].b];
for (let i = 1; i < N; i++) {
  const idx = lower_bound(dp, C[i].b);
  dp[idx] = C[i].b;
}
console.log(dp.length);
