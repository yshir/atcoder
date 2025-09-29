const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = [];

for (let i = 0; i < N - 1; i++) {
  const d = A[i] < A[i + 1] ? 1 : -1;
  let j = A[i];
  while (j !== A[i + 1]) {
    B.push(j);
    j += d;
  }
}

B.push(A[N - 1]);
console.log(B.join(' '));
