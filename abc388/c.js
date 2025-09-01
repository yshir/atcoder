const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

function lower_bound(arr, n) {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] < n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
}

let cnt = 0;
for (let i = 0; i < N; i++) {
  const idx = lower_bound(A, 2 * A[i]);
  if (idx <= N - 1) {
    cnt += N - idx;
  }
}
console.log(cnt);
