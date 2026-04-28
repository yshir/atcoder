const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, K] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1];
}

let ans = 0;
// const key = (i, j) => `${i}_${j}`;
const key = (i, j) => i * W + j;

const dfs = (i, j) => {
  const seen = new Set();
  seen.add(key(i, j));

  const _dfs = (i, j) => {
    if (seen.size === K + 1) {
      ans++;
      return;
    }

    for (const [di, dj] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const ni = i + di;
      const nj = j + dj;
      if (ni < 0 || ni === H || nj < 0 || nj === W) continue;
      if (S[ni][nj] === '#') continue;
      if (seen.has(key(ni, nj))) continue;

      seen.add(key(ni, nj));
      _dfs(ni, nj);
      seen.delete(key(ni, nj));
    }
  };
  _dfs(i, j);
};

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] !== '#') {
      dfs(i, j);
    }
  }
}

console.log(ans);
