const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < H; i++) {
  A[i] = input[i + 1].split(' ').map(BigInt);
}

const used = [];
for (let i = 0; i < H; i++) {
  used[i] = [];
  for (let j = 0; j < W; j++) {
    used[i][j] = 0;
  }
}

let max = 0n;

const dfs = (i, j) => {
  if (i >= H) {
    let cur = 0n;
    for (let ii = 0; ii < H; ii++) {
      for (let jj = 0; jj < W; jj++) {
        if (!used[ii][jj]) {
          cur ^= A[ii][jj];
        }
      }
    }
    max = max < cur ? cur : max;
    return;
  }
  if (j >= W) {
    dfs(i + 1, 0);
    return;
  }
  if (used[i][j]) {
    dfs(i, j + 1);
    return;
  }

  // nothing
  dfs(i, j + 1);

  // vertical
  if (i < H - 1 && !used[i + 1][j]) {
    used[i][j] = 1;
    used[i + 1][j] = 1;
    dfs(i, j + 1);
    used[i][j] = 0;
    used[i + 1][j] = 0;
  }

  // horizontal
  if (j < W - 1 && !used[i][j + 1]) {
    used[i][j] = 1;
    used[i][j + 1] = 1;
    dfs(i, j + 1);
    used[i][j] = 0;
    used[i][j + 1] = 0;
  }
};

dfs(0, 0);

console.log(max.toString());
