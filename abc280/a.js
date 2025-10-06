const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

let cnt = 0;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (input[i + 1][j] === '#') cnt++;
  }
}

console.log(cnt);
