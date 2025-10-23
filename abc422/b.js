const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) S[i] = input[i + 1];

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === '#') {
      let cnt = 0;
      for (const [dx, dy] of [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ]) {
        const nx = i + dx;
        const ny = j + dy;
        if (nx < 0 || ny < 0 || nx >= H || ny >= W) continue;
        if (S[nx][ny] === '#') cnt++;
      }
      if (cnt !== 2 && cnt !== 4) {
        console.log('No');
        return;
      }
    }
  }
}
console.log('Yes');
