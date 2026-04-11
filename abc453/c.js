const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const L = input[1].split(' ').map(Number);

let ans = 0;
for (let b = 0; b < 2 ** N + 1; b++) {
  let pos = 5;
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    let prev_pos = pos;
    if (((b >> i) & 1) === 1) {
      // go left
      pos -= L[i] * 10;
    } else {
      // go right
      pos += L[i] * 10;
    }

    if (prev_pos > 0 !== pos > 0) {
      cnt++;
    }
  }
  ans = Math.max(ans, cnt);
}

console.log(ans);
