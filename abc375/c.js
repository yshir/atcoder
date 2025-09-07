const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split('');
}

const B = [];
for (let i = 0; i < N; i++) {
  B[i] = Array(N).fill('_');
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const k = (Math.min(i, j, N - i - 1, N - j - 1) + 1) % 4;
    let ni = i;
    let nj = j;
    for (let n = 0; n < k; n++) {
      let _ni = ni;
      let _nj = nj;
      ni = _nj;
      nj = N - 1 - _ni;
    }
    B[ni][nj] = A[i][j];
  }
}

for (let i = 0; i < N; i++) {
  console.log(B[i].join(''));
}
