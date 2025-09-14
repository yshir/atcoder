const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, T] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [];
for (let i = 0; i < N; i++) {
  B[i] = [];
  for (let j = 0; j < N; j++) {
    B[i][j] = false;
  }
}

for (let k = 0; k < T; k++) {
  const n = A[k] - 1;
  const i = Math.floor(n / N);
  const j = n % N;
  B[i][j] = true;

  // vertical
  {
    let ok = true;
    for (let ii = 0; ii < N; ii++) {
      if (!B[ii][j]) {
        ok = false;
        break;
      }
    }
    if (ok) {
      console.log(k + 1);
      return;
    }
  }

  // horizontal
  {
    let ok = true;
    for (let jj = 0; jj < N; jj++) {
      if (!B[i][jj]) {
        ok = false;
        break;
      }
    }
    if (ok) {
      console.log(k + 1);
      return;
    }
  }

  // diagonal-left
  if (i === j) {
    let ok = true;
    for (let x = 0; x < N; x++) {
      if (!B[x][x]) {
        ok = false;
        break;
      }
    }
    if (ok) {
      console.log(k + 1);
      return;
    }
  }

  if (i + j === N - 1) {
    let ok = true;
    for (let ii = 0; ii < N; ii++) {
      if (!B[ii][N - ii - 1]) {
        ok = false;
        break;
      }
    }
    if (ok) {
      console.log(k + 1);
      return;
    }
  }
}

console.log(-1);
