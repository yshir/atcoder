const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [x, y, l, r, a, b] = input[0].split(' ').map(Number);

let ans = 0;
for (let i = a; i < b; i++) {
  if (l <= i && i < r) {
    ans += x;
  } else {
    ans += y;
  }
}
console.log(ans);
