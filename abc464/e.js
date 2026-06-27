const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, Q] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < H; i++) {
  A[i] = [];
  for (let j = 0; j < W; j++) {
    A[i][j] = -1;
  }
}

const map = { '-1': 'A' };
for (let i = 0; i < Q; i++) {
  let [r, c, x] = input[i + 1].split(' ');
  r = Number(r - 1);
  c = Number(c - 1);
  map[i] = x;
  A[r][c] = i;
}

for (let i = H - 1; i >= 0; i--) {
  for (let j = W - 1; j > 0; j--) {
    A[i][j - 1] = Math.max(A[i][j - 1], A[i][j]);
  }
}
for (let j = W - 1; j >= 0; j--) {
  for (let i = H - 1; i > 0; i--) {
    A[i - 1][j] = Math.max(A[i - 1][j], A[i][j]);
  }
}

for (let i = 0; i < H; i++) {
  console.log(A[i].map((x) => map[x]).join(''));
}
