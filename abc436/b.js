const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = [];
  for (let j = 0; j < N; j++) {
    A[i][j] = null;
  }
}

let r = 0;
let c = (N - 1) / 2;
let k = 1;
A[r][c] = k;

const mod = (a, b) => (a + b) % b;

for (let i = 0; i < N ** 2 - 1; i++) {
  let nr = mod(r - 1, N);
  let nc = mod(c + 1, N);
  let nk = k + 1;
  if (A[nr][nc] === null) {
    A[nr][nc] = nk;
  } else {
    nr = mod(r + 1, N);
    nc = c;
    A[nr][nc] = nk;
  }

  r = nr;
  c = nc;
  k = nk;
}

for (let i = 0; i < N; i++) {
  console.log(A[i].join(' '));
}
