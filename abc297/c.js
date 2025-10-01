const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) S[i] = input[i + 1].split('');

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W - 1; j++) {
    if (S[i][j] === 'T' && S[i][j + 1] === 'T') {
      S[i][j] = 'P';
      S[i][j + 1] = 'C';
    }
  }
}

for (let i = 0; i < H; i++) {
  console.log(S[i].join(''));
}
