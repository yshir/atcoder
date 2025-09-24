const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

const A = [];
const B = [];
for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ').map(Number);
  A[i] = x;
  B[i] = y;
}

const f = (d) => {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] >= d) {
      sum += B[i];
    }
  }
  return sum <= K;
};

let l = 0;
let r = 10 ** 9 + 1;
let m;
while (r - l > 1) {
  m = Math.floor((l + r) / 2);
  if (f(m)) {
    r = m;
  } else {
    l = m;
  }
}
console.log(r);
