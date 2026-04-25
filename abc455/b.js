const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) S[i] = input[i + 1];

let cnt = 0;

for (let h1 = 0; h1 < H; h1++) {
  for (let h2 = h1; h2 < H; h2++) {
    for (let w1 = 0; w1 < W; w1++) {
      for (let w2 = w1; w2 < W; w2++) {
        let ok = true;
        for (let i = h1; i <= h2; i++) {
          for (let j = w1; j <= w2; j++) {
            if (S[i][j] !== S[h1 + h2 - i][w1 + w2 - j]) ok = false;
          }
        }
        if (ok) cnt++;
      }
    }
  }
}

console.log(cnt);
