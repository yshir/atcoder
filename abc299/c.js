const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let max = -1;
let cur = 0;
for (let i = 0; i < N; i++) {
  if (S[i] === 'o') {
    cur++;
  } else {
    if (cur > 0) {
      max = Math.max(max, cur);
    }
    cur = 0;
  }
}

if (cur > 0 && cur < N) {
  max = Math.max(max, cur);
}

console.log(max);
