const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) S[i] = input[i + 1].split('');

const d = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let L = []; // latest
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === '#') {
      L.push([i, j]);
    }
  }
}

while (L.length > 0) {
  const N = []; // next
  for (const [i, j] of L) {
    for (const [di, dj] of d) {
      const ni = i + di;
      const nj = j + dj;
      if (ni < 0 || nj < 0 || ni >= H || nj >= W) continue;
      if (S[ni][nj] === '#') continue;

      let cnt = 0;
      for (const [ddi, ddj] of d) {
        const nni = ni + ddi;
        const nnj = nj + ddj;
        if (nni < 0 || nnj < 0 || nni >= H || nnj >= W) continue;
        if (S[nni][nnj] === '#') cnt++;
      }
      if (cnt === 1) {
        N.push([ni, nj]);
      }
    }
  }

  for (const [i, j] of N) {
    S[i][j] = '#';
  }

  L = N;
}

let ans = 0;
for (let i = 0; i < H; i++) for (let j = 0; j < W; j++) if (S[i][j] === '#') ans++;
console.log(ans);
