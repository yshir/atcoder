const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const f = (l, r) => {
  let cnt = 0;

  let cur = 0;
  while (l >= 0 && r < S.length) {
    if (S[l] !== S[r]) cur++;
    if (cur > 1) break;
    cnt++;
    l--;
    r++;
  }
  return cnt;
};

let cnt = 0;
for (let i = 0; i < S.length; i++) {
  cnt += f(i, i);
  cnt += f(i, i + 1);
}
console.log(cnt);
