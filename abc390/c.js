const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < H; i++) {
  A[i] = input[i + 1].split('');
}

let min_h = H + 1;
let max_h = -1;
let min_w = W + 1;
let max_w = -1;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (A[i][j] === '#') {
      if (min_h > i) {
        min_h = i;
      }
      if (max_h < i) {
        max_h = i;
      }
      if (min_w > j) {
        min_w = j;
      }
      if (max_w < j) {
        max_w = j;
      }
    }
  }
}

for (let i = min_h; i <= max_h; i++) {
  for (let j = min_w; j <= max_w; j++) {
    if (A[i][j] === '.') {
      console.log('No');
      return;
    }
  }
}
console.log('Yes');
