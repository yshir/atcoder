const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const [Q] = input[2].split(' ').map(Number);

const B = [];
for (let i = 0; i < N; i++) {
  B[i] = B[i - 1] || 0;
  if (i % 2 === 0) {
    B[i] += A[i] - (A[i - 1] || 0);
  }
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

const f = (x) => {
  const idx = Math.max(upper_bound(A, x) - 1, 0);

  let v = B[idx];
  if (idx % 2 === 1) {
    v += x - A[idx];
  }

  return v;
};

for (let i = 0; i < Q; i++) {
  const [l, r] = input[i + 3].split(' ').map(Number);
  console.log(f(r) - f(l));
}
