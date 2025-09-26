const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) S[i] = input[i + 1].split('');

const f = (x, y) => {
  const t = x;
  let b;
  let r;
  let l = y;

  for (let i = y; i < W; i++) {
    if (S[x][i] === '#') r = i;
    if (S[x + 1][i] === '#') r = i;
  }
  for (let i = y; i >= 0; i--) {
    if (S[x][i] === '#') l = i;
    if (S[x + 1][i] === '#') l = i;
  }

  for (let i = x; i < H; i++) {
    if (S[i] && S[i][y - 1] === '#') b = i;
    if (S[i][y] === '#') b = i;
    if (S[i] && S[i][y + 1] === '#') b = i;
  }

  for (let i = t; i <= b; i++) {
    for (let j = l; j <= r; j++) {
      if (S[i][j] === '.') {
        console.log([i + 1, j + 1].join(' '));
        return;
      }
    }
  }
};

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === '#') {
      f(i, j);
      return;
    }
  }
}
