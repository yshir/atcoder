const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

let A = [K];
let B = [];
let X = 0;

for (let i = 0; i < N; i++) {
  B = [];
  for (let j = 0; j < A.length; j++) {
    const s = Math.floor(A[j] / 2);
    const t = Math.ceil(A[j] / 2);
    X = Math.max(X, Math.abs(s - t));
    B.push(s, t);
  }
  A = [...B];
}

console.log(X);
console.log(A.join(' '));
