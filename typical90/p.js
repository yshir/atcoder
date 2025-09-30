const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const [A, B, C] = input[1].split(' ').map(Number);

let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 10000; i++) {
  for (let j = 0; j < 10000; j++) {
    const K = N - (A * i + B * j);
    if (K >= 0 && K % C === 0) {
      min = Math.min(min, i + j + K / C);
    }
  }
}

console.log(min);
