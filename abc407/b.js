const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, Y] = input[0].split(' ').map(Number);

let cnt = 0;
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j >= X || Math.abs(i - j) >= Y) {
      cnt++;
    }
  }
}
console.log(cnt / 36);
