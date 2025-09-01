const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, D] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

for (let k = 1; k <= D; k++) {
  let max = 0;
  for (let i = 0; i < N; i++) {
    const [t, l] = A[i];
    max = Math.max(max, t * (l + k));
  }
  console.log(max);
}
