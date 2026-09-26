const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);
const S = input[1];
const T = input[2];

const A = [];
for (let i = 0; i < S.length; i++) {
  if (S.slice(i, i + T.length) === T) A.push(i);
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

for (let i = 0; i < Q; i++) {
  let [l, r] = input[i + 3].split(' ').map(Number);
  l--;
  r--;

  const idx = lower_bound(A, l);
  if (idx === -1) {
    console.log('No');
    continue;
  }

  const l2 = A[idx];

  if (r >= l2 + T.length - 1) {
    console.log('Yes');
  } else {
    console.log('No');
  }
  // console.log({ l, r, l2 });
}
