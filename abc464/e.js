const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, Q] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < H; i++) {
  A[i] = [];
  for (let j = 0; j < W; j++) {
    A[i][j] = '@';
  }
}

const B = [];
for (let i = 0; i < Q; i++) {
  let [r, c, x] = input[i + 1].split(' ');
  r = Number(r - 1);
  c = Number(c - 1);
  B[i] = [r, c, x];
}
B.reverse();

let max_i = 0;
let max_j = 0;

for (const [r, c, x] of B) {
  if (A[r][c] !== '@') continue;

  let i = r;
  let j = c;
  while (1) {
    A[i][j] = x;
    if (i > 0 && A[i - 1][j] === '@') {
      i--;
      continue;
    }

    if (j > 0 && A[r][j - 1] === '@') {
      i = r;
      j--;
      continue;
    }

    break;
  }
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (A[i][j] === '@') A[i][j] = 'A';
  }
}

for (let i = 0; i < H; i++) {
  console.log(A[i].join(''));
}
