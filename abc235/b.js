const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const H = input[1].split(' ').map(Number);

let i = 0;
while (i < N - 1 && H[i] < H[i + 1]) {
  i++;
}
console.log(H[i]);
