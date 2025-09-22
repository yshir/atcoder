const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const [Q] = input[2].split(' ').map(Number);
const B = [];
for (let i = 0; i < Q; i++) {
  B[i] = Number(input[i + 3]);
}

A.sort((a, b) => a - b);

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

for (let i = 0; i < Q; i++) {
  const idx = lower_bound(A, B[i]);
  if (idx === 0) {
    console.log(Math.abs(A[0] - B[i]));
  } else if (idx === N) {
    console.log(Math.abs(A[N - 1] - B[i]));
  } else {
    console.log(
      Math.min(
        Math.abs(A[idx] - B[i]), //
        Math.abs(A[idx - 1] - B[i])
      )
    );
  }
}
