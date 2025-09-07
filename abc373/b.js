const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let cur = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === 'A') {
    cur = i;
    break;
  }
}

let ans = 0;
for (const key of [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']) {
  for (let i = 0; i < S.length; i++) {
    if (S[i] === key) {
      ans += Math.abs(cur - i);
      cur = i;
      break;
    }
  }
}
console.log(ans);
