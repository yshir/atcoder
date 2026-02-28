const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

let cnt = 0;
let idx_s = 0;
let idx_t = 0;

while (idx_s < S.length || idx_t < T.length) {
  if (S[idx_s] === T[idx_t]) {
    idx_s++;
    idx_t++;
    continue;
  }

  if (S[idx_s] === 'A') {
    // trim A
    cnt++;
    idx_s++;
    continue;
  }

  if (T[idx_t] === 'A') {
    // add A
    cnt++;
    idx_t++;
    continue;
  }

  console.log(-1);
  return;
}

console.log(cnt);
