const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let min_i = 0;
let min = A[0];
let ok = false;
for (let i = 0; i < K; i++) {
  if (A[i] === 9) ok = true;
  if (min > A[i]) {
    min = A[i];
    min_i = i;
  }
}

if (ok) {
  console.log(min);
} else {
  console.log(-1);
}
