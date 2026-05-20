const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, T] = input[0].split(' ').map(Number);
const S = input[1];
const X = input[2].split(' ').map(Number);

const R = [];
const L = [];
for (let i = 0; i < N; i++) {
  if (S[i] === '0') {
    L.push(X[i]);
  } else {
    R.push(X[i]);
  }
}
L.sort((a, b) => a - b);
R.sort((a, b) => a - b);

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

const L2 = L.map((x) => x - T - 0.1);
const R2 = R.map((x) => x + T + 0.1);

let ans = 0;
for (let i = 0; i < N; i++) {
  const a = lower_bound(L, R[i]);
  const b = lower_bound(L2, R2[i]);
  ans += b - a;
}
console.log(ans);
