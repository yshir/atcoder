const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

const map = {};
for (const c of [...'abcdefghijklmnopqrstuvwxyz']) {
  map[c] = [];
}

for (let i = 0; i < S.length; i++) {
  map[S[i]].push(i);
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
for (let i = 0; i < S.length; i++) {
  let r = i;
  let out = false;
  for (let j = 0; j < T.length; j++) {
    const idx_list = map[T[j]];
    const k = lower_bound(idx_list, r);
    if (map[T[j]][k] === undefined) {
      out = true;
      break;
    }
    r = map[T[j]][k] + 1;
  }
  if (!out) {
    cnt += S.length - (r - 1);
  }
}
const total = (S.length * (S.length + 1)) / 2;
console.log(total - cnt);
