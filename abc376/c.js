const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
let A = input[1].split(' ').map(Number);
let B = input[2].split(' ').map(Number);

A = A.sort((a, b) => a - b);
B = B.sort((a, b) => a - b);

const f = (x) => {
  let i = 0;
  let j = 0;
  while (i < N && j < N - 1) {
    if (i === x) {
      i++;
    }
    if (A[i] > B[j]) {
      return false;
    }
    i++;
    j++;
  }
  return true;
};

let l = 0;
let r = N - 1;
let m;
let ans = -1;
while (l <= r) {
  m = Math.floor((l + r) / 2);
  if (f(m)) {
    ans = m;
    r = m - 1;
  } else {
    l = m + 1;
  }
}

if (ans === -1) {
  console.log(ans);
} else {
  console.log(A[ans]);
}
