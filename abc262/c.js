const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [];
for (let i = 0; i < N; i++) {
  B[i] = A[i] === i + 1 ? 1 : 0;
  B[i] += B[i - 1] || 0;
}

let cnt = 0;
for (let i = 0; i < N; i++) {
  if (A[i] === i + 1) {
    cnt += B[N - 1] - B[i];
  }
  if (A[i] > i + 1) {
    if (A[A[i] - 1] === i + 1) {
      cnt++;
    }
  }
}
console.log(cnt);
