const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = 12;
let cnt = 0;
for (let i = 0; i < N; i++) {
  const s = input[i];
  if (s.length === i + 1) {
    cnt++;
  }
}
console.log(cnt);
