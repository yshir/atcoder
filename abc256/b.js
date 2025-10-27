const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = Array(4).fill(0);
for (let i = 0; i < N; i++) {
  for (let j = 2; j >= 0; j--) {
    B[Math.min(j + A[i], 3)] += B[j];
    B[j] = 0;
  }
  B[A[i] - 1]++;
}
console.log(B[3]);
