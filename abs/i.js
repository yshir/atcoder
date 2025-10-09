const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Y] = input[0].split(' ').map(Number);

for (let i = 0; i <= N; i++) {
  for (let j = 0; i + j <= N; j++) {
    const k = N - i - j;
    if (10000 * i + 5000 * j + 1000 * k === Y) {
      console.log([i, j, k].join(' '));
      return;
    }
  }
}

console.log([-1, -1, -1].join(' '));
