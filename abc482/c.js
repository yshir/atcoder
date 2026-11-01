let line = 0;
const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [H, W, N, Q] = input[line++].split(' ').map(Number);

const R = [];
const C = [];
for (let i = 0; i < N; i++) {
  const [r, c] = input[line++].split(' ').map(Number);
  R.push(r);
  C.push(c);
}
R.sort((a, b) => a - b);
C.sort((a, b) => a - b);

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
  const [a, b, c] = input[line++].split(' ').map(Number);
  if (a === 1) {
    const idx1 = lower_bound(R, b);
    const idx2 = upper_bound(R, c);
    console.log(idx2 - idx1);
  }
  if (a === 2) {
    const idx1 = lower_bound(C, b);
    const idx2 = upper_bound(C, c);
    console.log(idx2 - idx1);
  }
}
