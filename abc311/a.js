const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let a = false;
let b = false;
let c = false;
for (let i = 0; i < N; i++) {
  if (S[i] === 'A') a = true;
  if (S[i] === 'B') b = true;
  if (S[i] === 'C') c = true;
  if (a && b && c) {
    console.log(i + 1);
    return;
  }
}
