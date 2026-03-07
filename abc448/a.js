const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, X] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    X = A[i];
    console.log(1);
  } else {
    console.log(0);
  }
}
