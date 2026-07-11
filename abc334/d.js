const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const R = input[1].split(' ').map(Number);

R.sort((a, b) => a - b);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = (A[i - 1] || 0n) + BigInt(R[i]);
}

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
  const [X] = input[i + 2].split(' ').map(BigInt);
  console.log(upper_bound(A, X));
}
