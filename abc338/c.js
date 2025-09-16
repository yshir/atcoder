const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const Q = input[1].split(' ').map(Number);
const A = input[2].split(' ').map(Number);
const B = input[3].split(' ').map(Number);

let max_a = Math.max(...Q);
let max = 0;

for (let i = 0; i <= max_a; i++) {
  // cook A
  const R = [];

  let ng = false;
  for (let j = 0; j < N; j++) {
    R[j] = Q[j] - A[j] * i;
    if (R[j] < 0) {
      ng = true;
      break;
    }
  }
  if (ng) break;

  // cook B
  let max_b = Number.MAX_VALUE;
  for (let j = 0; j < N; j++) {
    if (B[j] !== 0) {
      max_b = Math.min(max_b, Math.floor(R[j] / B[j]));
    }
  }

  max = Math.max(max, i + max_b);
}
console.log(max);
