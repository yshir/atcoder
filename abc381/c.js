const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let max = 1;
for (let i = 0; i < N; i++) {
  if (S[i] === '/') {
    let cur = 1;
    let j;
    for (j = 1; i + j < N && i - j >= 0; j++) {
      if (S[i - j] === '1' && S[i + j] === '2') {
        cur += 2;
      } else {
        break;
      }
    }
    max = Math.max(max, cur);
    i = i + j - 1;
  }
}
console.log(max);
