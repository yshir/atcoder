const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, X, Y] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1].split('');
}
const T = input[H + 1];

const key = (x, y) => `${x}_${y}`;

let x = X - 1;
let y = Y - 1;
const set = new Set();

if (S[x][y] === '@') {
  set.add(key(x, y));
}
for (let i = 0; i < T.length; i++) {
  switch (T[i]) {
    case 'U':
      if (S[x - 1][y] !== '#') {
        x--;
      }
      break;
    case 'D':
      if (S[x + 1][y] !== '#') {
        x++;
      }
      break;
    case 'L':
      if (S[x][y - 1] !== '#') {
        y--;
      }
      break;
    case 'R':
      if (S[x][y + 1] !== '#') {
        y++;
      }
      break;
  }

  if (S[x][y] === '@') {
    set.add(key(x, y));
  }
}

console.log([x + 1, y + 1, set.size].join(' '));
