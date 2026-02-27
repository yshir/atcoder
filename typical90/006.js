const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const S = input[1];

const ans = [];
let cur = 0;

const upper_bound = (n) => {
  let first = 0,
    last = cur - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (ans[middle] <= n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

for (let i = 0; i < N; i++) {
  const code = S.charCodeAt(i);
  const min = Math.max(0, K - (N - i));
  const idx = Math.max(min, upper_bound(code));
  ans[idx] = code;
  cur = idx + 1;
}

console.log(
  ans
    .slice(0, K)
    .map((x) => String.fromCharCode(x))
    .join(''),
);
