const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const X = input[1].split(' ').map(Number);
const P = input[2].split(' ').map(Number);
const [Q] = input[3].split(' ').map(Number);

const acc = [P[0]];
for (let i = 1; i < N; i++) {
  acc[i] = acc[i - 1] + P[i];
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

for (let i = 0; i < Q; i++) {
  const [l, r] = input[4 + i].split(' ').map(Number);
  const idx_l = lower_bound(X, l) - 1;
  const idx_r = upper_bound(X, r) - 1;

  let ans = 0;
  if (acc[idx_r]) ans += acc[idx_r];
  if (acc[idx_l]) ans -= acc[idx_l];
  console.log(ans);
}
