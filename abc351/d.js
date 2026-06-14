const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1].split('');
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === '.') {
      let ok = true;
      for (const [di, dj] of [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ]) {
        const ni = i + di;
        const nj = j + dj;
        if (ni < 0 || ni === H || nj < 0 || nj === W) continue;
        if (S[ni][nj] === '#') {
          ok = false;
          break;
        }
      }
      if (!ok) S[i][j] = 'x';
    }
  }
}

let ans = 1;

const f = (i, j) => {
  S[i][j] = 'o';
  let cur = 1;
  const seen = new Set();
  const stack = [];
  stack.push([i, j]);
  while (stack.length > 0) {
    const [i, j] = stack.pop();
    for (const [di, dj] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]) {
      const ni = i + di;
      const nj = j + dj;
      if (ni < 0 || ni === H || nj < 0 || nj === W) continue;
      if (S[ni][nj] === 'x') {
        if (!seen.has(`${ni}i_${nj}j`)) {
          seen.add(`${ni}i_${nj}j`);
          cur++;
        }
      }
      if (S[ni][nj] === '.') {
        S[ni][nj] = 'o';
        cur++;
        stack.push([ni, nj]);
      }
    }
  }
  ans = Math.max(ans, cur);
};

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === '.') {
      f(i, j);
    }
  }
}

console.log(ans);
