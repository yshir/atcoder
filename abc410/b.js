const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const X = input[1].split(' ').map(Number);

const A = Array(N).fill(0);
for (let i = 0; i < Q; i++) {
  let ans;
  if (X[i] > 0) {
    ans = X[i] - 1;
  } else {
    let min = Number.MAX_SAFE_INTEGER;
    let min_i = 0;
    for (let j = 0; j < N; j++) {
      if (min > A[j]) {
        min = A[j];
        min_i = j;
      }
    }
    ans = min_i;
  }
  A[ans]++;
  console.log(ans + 1);
}
