const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const max = 2 * 10 ** 5;
const X = Array(max).fill(-1);
let head = max + 1;
for (let i = 0; i < N; i++) {
  if (A[i] < head) {
    for (let j = A[i]; j < head; j++) {
      X[j] = i + 1;
    }
    head = A[i];
  }
}

for (let i = 0; i < M; i++) {
  console.log(X[B[i]]);
}
