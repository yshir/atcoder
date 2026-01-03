const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0].split('').map(Number);

let cnt = 0;
for (let l = 0; l < S.length - 1; l++) {
  const r = l + 1;
  if (S[l] + 1 !== S[r]) {
    continue;
  }

  cnt++;
  for (let n = 1; ; n++) {
    const nl = l - n;
    const nr = r + n;
    if (S[nl] === S[l] && S[nr] === S[r]) {
      cnt++;
    } else {
      break;
    }
  }
}
console.log(cnt);
