const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);
const A = input[1].split(' ').map(BigInt);
const [X] = input[2].split(' ').map(BigInt);

let ans = 0n;

const U = A.reduce((x, y) => x + y, 0n);
const div = X / U;
ans += div * N;

let remain = X - div * U;
for (let i = 0; i < N; i++) {
  if (remain < 0n) {
    break;
  }
  ans++;
  remain -= A[i];
}

console.log(ans.toString());
