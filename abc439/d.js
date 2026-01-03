const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const map = {};

for (let i = 0; i < N; i++) {
  map[A[i]] = map[A[i]] || [];
  map[A[i]].push(i);
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

let cnt = 0;
for (let i = 0; i < N; i++) {
  if (A[i] % 5 === 0) {
    const k = A[i] / 5;
    const idx_3 = map[3 * k] || [];
    const idx_7 = map[7 * k] || [];

    const idx_3_cnt_left = lower_bound(idx_3, i);
    const idx_3_cnt_right = idx_3.length - idx_3_cnt_left;

    const idx_7_cnt_left = lower_bound(idx_7, i);
    const idx_7_cnt_right = idx_7.length - idx_7_cnt_left;

    cnt += idx_3_cnt_left * idx_7_cnt_left;
    cnt += idx_3_cnt_right * idx_7_cnt_right;
  }
}

console.log(cnt);
