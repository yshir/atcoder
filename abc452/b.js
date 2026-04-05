const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

for (let i = 0; i < H; i++) {
  const L = [];
  for (let j = 0; j < W; j++) {
    if (i === 0 || i === H - 1 || j === 0 || j === W - 1) {
      L.push('#');
    } else {
      L.push('.');
    }
  }
  console.log(L.join(''));
}
