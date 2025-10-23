const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [a, b, c] = input[i + 1].split(' ').map(Number);

  const f = (m) => {
    if (a < m) return false;
    if (c < m) return false;
    if (a - m + c - m + b < m) return false;
    return true;
  };

  let l = -1;
  let r = 10 ** 9 + 1;
  let m;
  while (r - l > 1) {
    m = Math.floor((l + r) / 2);
    if (f(m)) {
      l = m;
    } else {
      r = m;
    }
  }
  console.log(l);
}
