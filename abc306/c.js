const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [];
for (let i = 0; i < N; i++) B[i + 1] = [];

for (let i = 0; i < A.length; i++) {
  B[A[i]].push(i);
}

const C = [];
for (let i = 0; i < N; i++) C[i] = i + 1;
C.sort((a, b) => B[a][1] - B[b][1]);
console.log(C.join(' '));
