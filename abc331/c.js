const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += A[i];
}

const B = [...A].sort((a, b) => a - b);
const C = [...B];
for (let i = 0; i < N - 1; i++) {
  C[i + 1] += C[i];
}

const map = {};
for (let i = 0; i < N; i++) {
  map[B[i]] = sum - C[i];
}

const ans = [];
for (let i = 0; i < N; i++) {
  ans.push(map[A[i]]);
}
console.log(ans.join(' '));
