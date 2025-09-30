const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const A = [];
const B = [];
for (let i = 0; i < H; i++) {
  A[i] = input[i + 1].split('');
  B[i] = input[i + 1 + H].split('');
}

for (let ki = 0; ki < H; ki++) {
  for (let kj = 0; kj < W; kj++) {
    let ok = true;
    for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
        if (A[(i + ki) % H][(j + kj) % W] !== B[i][j]) ok = false;
      }
    }
    if (ok) {
      console.log('Yes');
      return;
    }
  }
}

console.log('No');
