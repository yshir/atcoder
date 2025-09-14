const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
const B = [];
for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  A[i] = a;
  B[i] = b;
}

let max = 0;
let max_i = 0;
for (let i = 0; i < N; i++) {
  if (max < B[i] - A[i]) {
    max = B[i] - A[i];
    max_i = i;
  }
}

let ans = 0n;
for (let i = 0; i < N; i++) {
  if (i !== max_i) {
    ans += BigInt(A[i]);
  } else {
    ans += BigInt(B[i]);
  }
}
console.log(ans.toString());
