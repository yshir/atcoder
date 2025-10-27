const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K, Q] = input[0].split(' ').map(Number);
const A = input[1]
  .split(' ')
  .map(Number)
  .map((x) => x - 1);
const L = input[2]
  .split(' ')
  .map(Number)
  .map((x) => x - 1);

const M = Array(N).fill(0);
for (let i = 0; i < K; i++) {
  M[A[i]] = 1;
}

for (let i = 0; i < Q; i++) {
  if (A[L[i]] === N - 1) {
    //
  } else if (M[A[L[i]] + 1]) {
    //
  } else {
    M[A[L[i]]] = 0;
    A[L[i]]++;
    M[A[L[i]]] = 1;
  }
}

console.log(A.map((x) => x + 1).join(' '));
