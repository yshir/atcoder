const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, Y, N] = input[0].split(' ').map(Number);

let ans = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= N; i++) {
  for (let j = 0; j <= N; j++) {
    if (i + 3 * j === N) {
      ans = Math.min(ans, i * X + j * Y);
    }
  }
}

console.log(ans);
