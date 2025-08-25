const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = i + 1;
}

let begin = 0;
for (let i = 0; i < Q; i++) {
  const q = input[i + 1].split(' ').map(Number);
  if (q[0] === 1) {
    const [, p, x] = q;
    A[(begin + p - 1) % N] = x;
  } else if (q[0] === 2) {
    const [, p] = q;
    console.log(A[(begin + p - 1) % N]);
  } else {
    const [, k] = q;
    begin = (begin + k) % N;
  }
}
