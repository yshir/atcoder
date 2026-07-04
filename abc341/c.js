const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, N] = input[0].split(' ').map(Number);
const T = input[1];
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 2];
}

const map = {
  L: [0, 1],
  R: [0, -1],
  U: [1, 0],
  D: [-1, 0],
};

const ok = (i, j) => {
  for (let k = N - 1; k >= 0; k--) {
    const [di, dj] = map[T[k]];
    i += di;
    j += dj;
    if (S[i][j] !== '.') return false;
  }
  return true;
};

let ans = 0;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === '.' && ok(i, j)) ans++;
  }
}
console.log(ans);
