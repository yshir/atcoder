const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, P, Q, R] = input[0].split(' ').map(BigInt);
N = Number(N);
const A = input[1].split(' ').map(BigInt);

for (let i = 1; i < N; i++) {
  A[i] += A[i - 1];
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

for (let x = 0; x < N; x++) {
  const y_ = (A[x - 1] || 0n) + P;
  let y = lower_bound(A, y_);
  if (A[y] !== y_) continue;
  y++;
  const z_ = A[y - 1] + Q;
  let z = lower_bound(A, z_);
  if (A[z] !== z_) continue;
  z++;
  const w_ = A[z - 1] + R;
  let w = lower_bound(A, w_);
  if (A[w] !== w_) continue;
  w++;

  console.log('Yes');
  return;
}

console.log('No');
