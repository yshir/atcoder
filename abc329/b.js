const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let max1 = 0;
let max2 = 0;
for (let i = 0; i < N; i++) {
  if (max1 < A[i]) {
    max2 = max1;
    max1 = A[i];
  } else if (max1 !== A[i] && max2 < A[i]) {
    max2 = A[i];
  }
}
console.log(max2);
