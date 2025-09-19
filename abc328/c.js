const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const S = input[1];

const A = [0];
for (let i = 1; i < N; i++) {
  if (S[i - 1] === S[i]) {
    A[i] = A[i - 1] + 1;
  } else {
    A[i] = A[i - 1];
  }
}

for (let i = 0; i < Q; i++) {
  const [l, r] = input[i + 2].split(' ').map(Number);
  console.log(A[r - 1] - A[l - 1]);
}
