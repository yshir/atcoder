const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

A.sort((x, y) => x - y);
A.push(Number.MAX_VALUE);

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
  let [X, Y] = input[i + 2].split(' ').map(Number);

  const idx = lower_bound(A, X);
  const cnt = A[idx] - X;

  if (Y - cnt <= 0) {
    console.log(X + Y - 1);
    continue;
  }

  Y -= cnt;
  X = A[idx];

  const is_wa = (mid) => {
    return A[mid] - X - (mid - idx) < Y;
  };

  let wa = idx;
  let ac = N;
  while (wa + 1 < ac) {
    let mid = Math.floor((wa + ac) / 2);
    if (is_wa(mid)) {
      wa = mid;
    } else {
      ac = mid;
    }
  }

  Y -= A[wa] - X - (wa - idx);
  X = A[wa];
  console.log(X + Y);
}
