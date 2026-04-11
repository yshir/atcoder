const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let t = '';
let ok = false;
for (let i = 0; i < N; i++) {
  if (S[i] !== 'o') {
    ok = true;
    t += S[i];
    continue;
  }

  if (!ok) {
    continue;
  }
  t += S[i];
}

console.log(t);
