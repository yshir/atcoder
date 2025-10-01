const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

let ok = false;
for (let i = 0; i < N; i++) {
  if (S[i] === 'o') {
    ok = true;
  }
  if (S[i] === 'x') {
    console.log('No');
    return;
  }
}

if (ok) {
  console.log('Yes');
} else {
  console.log('No');
}
