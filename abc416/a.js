const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, L, R] = input[0].split(' ').map(Number);
const S = input[1];

let ok = true;
for (let i = L - 1; i < R; i++) {
  if (S[i] !== 'o') {
    ok = false;
    break;
  }
}
console.log(ok ? 'Yes' : 'No');
