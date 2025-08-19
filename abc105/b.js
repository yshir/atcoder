const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let ans = 0;
for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    continue;
  }
  let cnt = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      cnt++;
    }
  }
  if (cnt === 8) {
    ans++;
  }
}
console.log(ans);
