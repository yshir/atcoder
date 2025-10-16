const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const odd = [];
const even = [];
for (let i = 0; i < N; i++) {
  if (A[i] % 2 === 0) {
    even.push(A[i]);
  } else {
    odd.push(A[i]);
  }
}
odd.sort((a, b) => b - a);
even.sort((a, b) => b - a);

let max = -1;
if (odd.length >= 2) {
  max = Math.max(max, odd[0] + odd[1]);
}
if (even.length >= 2) {
  max = Math.max(max, even[0] + even[1]);
}
console.log(max);
