const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const A = [...S].map(Number).reverse();

let sum = 0;
for (let i = 0; i < A.length - 1; i++) {
  if (A[i] <= A[i + 1]) {
    sum += A[i + 1] - A[i];
  } else {
    sum += A[i + 1] - A[i] + 10;
  }
}
sum += A.length;
sum += A[0];
console.log(sum);
