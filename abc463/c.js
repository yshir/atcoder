const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const HL = [];
for (let i = 0; i < N; i++) {
  HL[i] = input[i + 1].split(' ').map(Number);
}
const [Q] = input[N + 1].split(' ').map(Number);
const T = input[N + 2].split(' ').map(Number);

let max = 0;
for (let i = N - 1; i >= 0; i--) {
  max = Math.max(max, HL[i][0]);
  HL[i][2] = max;
}

const upper_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle][1] <= n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

for (let i = 0; i < Q; i++) {
  const idx = upper_bound(HL, T[i]);
  console.log(HL[idx][2] || 0);
}
