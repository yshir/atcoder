const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = [];
const A = [];
for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ');
  S[i] = x;
  A[i] = Number(y);
}

let min = Number.MAX_SAFE_INTEGER;
let min_i = 0;
for (let i = 0; i < N; i++) {
  if (min > A[i]) {
    min = A[i];
    min_i = i;
  }
}

for (let i = 0; i < N; i++) {
  console.log(S[(i + min_i) % N]);
}
