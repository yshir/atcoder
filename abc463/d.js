const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}
A.sort((x, y) => x[1] - y[1]);

{
  let cnt = 0;
  let max_r = -1;
  for (let i = 0; i < N; i++) {
    const [l, r] = A[i];
    if (max_r < l) {
      cnt++;
      max_r = r;
    }
  }
  if (cnt < K) {
    console.log(-1);
    return;
  }
}

const f = (d) => {
  let cnt = 0;
  let max_r = -1;
  for (let i = 0; i < N; i++) {
    let [l, r] = A[i];
    r += d;
    if (max_r < l) {
      cnt++;
      max_r = r;
    }
  }
  return cnt >= K;
};

let l = 0;
let r = 1e9 + 10;
let m;
while (r - l > 1) {
  m = Math.floor((l + r) / 2);
  if (f(m)) {
    l = m;
  } else {
    r = m;
  }
}

console.log(l + 1);
