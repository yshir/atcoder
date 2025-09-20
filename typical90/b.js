const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

for (let i = 0; i < 1 << N; i++) {
  const s = [];
  for (let j = 0; j < N; j++) {
    if (((i >> j) & 1) === 0) {
      s[j] = '(';
    } else {
      s[j] = ')';
    }
  }
  s.reverse();

  let l = 0;
  let r = 0;
  let ok = true;
  for (let j = 0; j < N; j++) {
    if (s[j] === '(') {
      l++;
    } else {
      r++;
    }

    if (l < r) {
      ok = false;
      break;
    }
  }
  if (ok && l === r) console.log(s.join(''));
}
