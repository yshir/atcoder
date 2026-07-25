const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [M, D] = input[0].split(' ').map(Number);
const S = input[1];

let cnt = 0;
for (let i = 0; i < M; i++) {
  let ok = true;
  let ok2 = false;
  for (let j = 0; j <= D; j++) {
    if ((S[i + j] || '#') === 'G') ok = false;
    if ((S[i - j] || '#') === 'G') ok = false;
    if ((S[i + j] || '#') === '.') ok2 = true;
    if ((S[i - j] || '#') === '.') ok2 = true;
  }
  if (ok && ok2) cnt++;
}
console.log(cnt);
