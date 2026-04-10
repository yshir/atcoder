const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, S] = input[0].split(' ');
N = Number(N);
S = BigInt(S);
const A = input[1].split(' ').map(BigInt);

let T = 0n;
for (let i = 0; i < N; i++) {
  T += A[i];
}
S %= T;

const B = [...A, ...A];
for (let i = 0; i < B.length - 1; i++) {
  B[i + 1] += B[i];
}

const set = new Set();
for (let i = 0; i < B.length; i++) {
  set.add(B[i]);
}
for (let i = 0; i < B.length; i++) {
  if (set.has(B[i] - S)) {
    console.log('Yes');
    return;
  }
}
console.log('No');
