const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, X, Y] = input[0].split(' ');
N = Number(N);
X = BigInt(X);
Y = BigInt(Y);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

A.sort((a, b) => b - a);
B.sort((a, b) => b - a);

let ans = N;

let sum = 0n;
for (let i = 0; i < N; i++) {
  sum += BigInt(A[i]);
  if (sum > X) {
    if (ans > i + 1) {
      ans = i + 1;
    }
  }
}

sum = 0n;
for (let i = 0; i < N; i++) {
  sum += BigInt(B[i]);
  if (sum > Y) {
    if (ans > i + 1) {
      ans = i + 1;
    }
  }
}

console.log(ans);
