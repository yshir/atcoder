let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T, M] = input[line++].split(' ').map(Number);

const A = [[1]];
for (let i = 0; i < 5000; i++) {
  A[i + 1] = Array(i + 2).fill(0);
  for (let j = 0; j < i + 1; j++) {
    A[i + 1][j] += A[i][j];
    A[i + 1][j] %= M;

    A[i + 1][j + 1] += A[i][j];
    A[i + 1][j + 1] %= M;
  }
}

const nCr = (n, r) => {
  return A[n][r];
};

while (T--) {
  const [N] = input[line++].split(' ').map(Number);
  const C = input[line++].split(' ').map(Number);

  let rem = C.reduce((x, y) => x + y, 0);
  let cur = 1n;
  for (let i = 0; i < N - 1; i++) {
    cur *= BigInt(nCr(rem, C[i]));
    cur %= BigInt(M);
    rem -= C[i];
  }
  console.log(cur.toString());
}
