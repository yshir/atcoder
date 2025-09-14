const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let cnt = 0;
let remain = K;
for (let i = 0; i < N; i++) {
  if (A[i] <= remain) {
    remain -= A[i];
  } else {
    cnt++;
    remain = K - A[i];
  }
}
console.log(cnt + 1);
