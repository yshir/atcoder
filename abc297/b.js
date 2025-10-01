const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const b = [];
for (let i = 0; i < S.length; i++) {
  if (S[i] === 'B') b.push(i);
}

if ((b[0] + b[1]) % 2 == 0) {
  console.log('No');
  return;
}

let r = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === 'R') {
    r++;
  }
  if (S[i] === 'K') {
    if (r === 1) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
}
