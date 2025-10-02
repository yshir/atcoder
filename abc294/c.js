const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const C = [];
for (let i = 0; i < N; i++) {
  C.push({ type: 'A', index: i, value: A[i] });
}
for (let i = 0; i < M; i++) {
  C.push({ type: 'B', index: i, value: B[i] });
}
C.sort((a, b) => a.value - b.value);

const D = [];
const E = [];
for (let i = 0; i < N + M; i++) {
  if (C[i].type === 'A') {
    D[C[i].index] = i + 1;
  } else {
    E[C[i].index] = i + 1;
  }
}

console.log(D.join(' '));
console.log(E.join(' '));
