const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let x = 0;
let y = 0;
for (let i = 0; i < N; i++) {
  const [xx, yy] = input[i + 1].split(' ').map(Number);
  x += xx;
  y += yy;
}

if (x > y) {
  console.log('Takahashi');
} else if (x < y) {
  console.log('Aoki');
} else {
  console.log('Draw');
}
