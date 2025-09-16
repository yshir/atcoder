const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

let X = ['A', 'B', 'C'];

for (let i = 0; i < S.length; i++) {
  let ok = false;
  for (let j = 0; j < X.length; j++) {
    if (S[i] === X[j]) {
      X = X.slice(j);
      ok = true;
      break;
    }
  }
  if (!ok) {
    console.log('No');
    return;
  }
}

console.log('Yes');
