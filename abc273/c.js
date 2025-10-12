const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [...new Set(A)].sort((a, b) => a - b);

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

const result = {};

for (let i = 0; i < N; i++) {
  const value = B.length - upper_bound(B, A[i]);
  result[value] = (result[value] || 0) + 1;
}

for (let K = 0; K < N; K++) {
  console.log(result[K] || 0);
}
