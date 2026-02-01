let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

while (T--) {
  const [N] = input[line++].split(' ').map(Number);
  const R = input[line++].split(' ').map(Number);

  let cnt = 0;
  for (let i = 0; i < N - 1; i++) {
    if (R[i] < R[i + 1]) {
      cnt += R[i + 1] - R[i] - 1;
      R[i + 1] = R[i] + 1;
    }
  }

  for (let i = N - 1; i > 0; i--) {
    if (R[i - 1] > R[i]) {
      cnt += R[i - 1] - R[i] - 1;
      R[i - 1] = R[i] + 1;
    }
  }
  console.log(cnt);
}
