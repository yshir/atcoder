const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = [];
  for (let j = 0; j < N; j++) {
    A[i][j] = 0;
  }
}
A[Math.floor(N / 2)][Math.floor(N / 2)] = 'T';

const get = (i, j) => {
  if (A[i] !== undefined && A[i][j] !== undefined) return A[i][j];
  return 1;
};

const d = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0], //
];

let d_idx = 0;
let i = 0;
let j = -1;
let x = 1;
while (1) {
  const [di, dj] = d[d_idx];
  const ni = i + di;
  const nj = j + dj;

  const v = get(ni, nj);
  if (v === 'T') {
    break;
  }

  if (v === 0) {
    A[ni][nj] = x++;
    i = ni;
    j = nj;
  } else {
    d_idx = (d_idx + 1) % d.length;
  }
}

for (let i = 0; i < N; i++) console.log(A[i].join(' '));
