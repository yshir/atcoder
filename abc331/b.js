const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, S, M, L] = input[0].split(' ').map(Number);

let min = Number.MAX_VALUE;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    for (let k = 0; k < 100; k++) {
      if (i * 6 + j * 8 + k * 12 >= N) {
        min = Math.min(min, i * S + j * M + k * L);
      }
    }
  }
}
console.log(min);
