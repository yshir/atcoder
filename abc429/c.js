const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = Array(N).fill(0);
for (let i = 0; i < N; i++) {
  B[A[i] - 1]++;
}

let cnt = 0;
for (let i = 0; i < N; i++) {
  cnt += ((B[i] * (B[i] - 1)) / 2) * (N - B[i]);
}
console.log(cnt);
