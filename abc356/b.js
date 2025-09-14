const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const X = [];
for (let i = 0; i < N; i++) {
  X[i] = input[i + 2].split(' ').map(Number);
}

for (let i = 0; i < N; i++) {
  let ok = true;
  for (let j = 0; j < M; j++) {
    A[j] -= X[i][j];
    if (A[j] > 0) {
      ok = false;
    }
  }
  if (ok) {
    console.log('Yes');
    return;
  }
}
console.log('No');
