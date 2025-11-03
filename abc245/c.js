const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

let ok_a = true;
let ok_b = true;
for (let i = 1; i < N; i++) {
  let ok_a2 = false;
  if (ok_a && Math.abs(A[i - 1] - A[i]) <= K) {
    ok_a2 = true;
  }
  if (ok_b && Math.abs(B[i - 1] - A[i]) <= K) {
    ok_a2 = true;
  }

  let ok_b2 = false;
  if (ok_a && Math.abs(A[i - 1] - B[i]) <= K) {
    ok_b2 = true;
  }
  if (ok_b && Math.abs(B[i - 1] - B[i]) <= K) {
    ok_b2 = true;
  }

  ok_a = ok_a2;
  ok_b = ok_b2;

  if (!ok_a && !ok_b) {
    console.log('No');
    return;
  }
}
console.log('Yes');
