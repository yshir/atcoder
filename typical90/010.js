const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [];
const B = [];
for (let i = 0; i < N; i++) {
  const [c, p] = input[i + 1].split(' ').map(Number);

  A[i] = A[i - 1] || 0;
  B[i] = B[i - 1] || 0;

  if (c === 1) {
    A[i] += p;
  } else {
    B[i] += p;
  }
}

const [Q] = input[1 + N].split(' ').map(Number);
for (let i = 0; i < Q; i++) {
  const [l, r] = input[i + 2 + N].split(' ').map(Number);

  const ans = [];
  ans.push(A[r - 1] - (A[l - 2] || 0));
  ans.push(B[r - 1] - (B[l - 2] || 0));
  console.log(ans.join(' '));
}
