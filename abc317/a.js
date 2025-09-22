const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, H, X] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);

for (let i = 0; i < N; i++) {
  if (H + P[i] >= X) {
    console.log(i + 1);
    return;
  }
}
