const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [N] = input[i * 2 + 1].split(' ').map(Number);
  const S = input[i * 2 + 2];

  const A = [
    [0], //
    [0],
    [0],
  ];

  for (let j = 0; j < N; j++) {
    if (S[j] === '0') {
      A[0][j + 1] = A[0][j] + 0;
      A[1][j + 1] = Math.min(A[0][j], A[1][j]) + 1;
      A[2][j + 1] = Math.min(A[0][j], A[1][j], A[2][j]) + 0;
    }
    if (S[j] === '1') {
      A[0][j + 1] = A[0][j] + 1;
      A[1][j + 1] = Math.min(A[0][j], A[1][j]) + 0;
      A[2][j + 1] = Math.min(A[0][j], A[1][j], A[2][j]) + 1;
    }
  }

  console.log(
    Math.min(
      A[0][N], //
      A[1][N],
      A[2][N]
    )
  );
}
