const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
let A = [];
const B = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
  B[i] = input[i + 1 + N].split(' ').map(Number);
}

const rotate = (A) => {
  const C = [];
  for (let i = 0; i < N; i++) {
    C[i] = [];
    for (let j = 0; j < N; j++) {
      C[i][j] = 0;
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      C[i][j] = A[N - 1 - j][i];
    }
  }

  return C;
};

for (let k = 0; k < 4; k++) {
  let ok = true;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (A[i][j] === 1 && B[i][j] !== 1) {
        ok = false;
      }
    }
  }
  if (ok) {
    console.log('Yes');
    return;
  }
  A = rotate(A);
}
console.log('No');
