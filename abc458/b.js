const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

const ans = [];
for (let i = 0; i < H; i++) {
  ans[i] = [];
  for (let j = 0; j < W; j++) {
    ans[i][j] = 0;
  }
}

for (let x1 = 0; x1 < H; x1++) {
  for (let y1 = 0; y1 < W; y1++) {
    for (let x2 = 0; x2 < H; x2++) {
      for (let y2 = 0; y2 < W; y2++) {
        if (Math.abs(x1 - x2) + Math.abs(y1 - y2) === 1) {
          ans[x1][y1]++;
        }
      }
    }
  }
}

for (let i = 0; i < H; i++) {
  console.log(ans[i].join(' '));
}
