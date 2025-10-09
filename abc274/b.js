const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const C = [];
for (let i = 0; i < H; i++) {
  C[i] = input[i + 1];
}

const ans = [];
for (let j = 0; j < W; j++) {
  let cnt = 0;
  for (let i = 0; i < H; i++) {
    if (C[i][j] === '#') cnt++;
  }
  ans.push(cnt);
}
console.log(ans.join(' '));
