const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const pos = {};
const A = [];
for (let i = 0; i < N; i++) {
  A[i] = i + 1;
  pos[i + 1] = i;
}

for (let i = 0; i < Q; i++) {
  const x = input[i + 1].split(' ').map(Number);
  const p = pos[x];
  if (p === N - 1) {
    // left
    [pos[A[p]], pos[A[p - 1]]] = [pos[A[p - 1]], pos[A[p]]];
    [A[p], A[p - 1]] = [A[p - 1], A[p]];
  } else {
    // right
    [pos[A[p]], pos[A[p + 1]]] = [pos[A[p + 1]], pos[A[p]]];
    [A[p], A[p + 1]] = [A[p + 1], A[p]];
  }
}

console.log(A.join(' '));
