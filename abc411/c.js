const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const X = Array(N + 2).fill(0);

let ans = 0;
for (let i = 0; i < Q; i++) {
  // sub
  if (X[A[i] - 1] === 0 && X[A[i]] === 1) {
    ans--;
  }
  if (X[A[i]] === 0 && X[A[i] + 1] === 1) {
    ans--;
  }

  // reverse
  X[A[i]] = 1 - X[A[i]];

  // add
  if (X[A[i] - 1] === 0 && X[A[i]] === 1) {
    ans++;
  }
  if (X[A[i]] === 0 && X[A[i] + 1] === 1) {
    ans++;
  }

  console.log(ans);
}
