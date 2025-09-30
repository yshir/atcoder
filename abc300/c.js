const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const C = [];
for (let i = 0; i < H; i++) {
  C[i] = input[i + 1];
}

const S = [];
for (let i = 0; i < Math.min(H, W); i++) {
  S[i] = 0;
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (C[i][j] !== '#') {
      continue;
    }

    for (let k = 1; ; k++) {
      let ok = true;
      for (const [dx, dy] of [
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, -1],
      ]) {
        const ax = i + dx * k;
        const ay = j + dy * k;
        if (ax < 0 || ay < 0 || ax >= H || ay >= W || C[ax][ay] !== '#') {
          ok = false;
        }
      }
      if (!ok) {
        if (k > 1) {
          S[k - 2]++;
        }
        break;
      }
    }
  }
}

console.log(S.join(' '));
