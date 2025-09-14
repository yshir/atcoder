const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const H = input[1].split(' ').map(Number);
for (let i = 1; i < N; i++) {
  if (H[0] < H[i]) {
    console.log(i + 1);
    return;
  }
}
console.log(-1);
