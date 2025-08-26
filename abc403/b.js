const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const T = input[0];
const U = input[1];

for (let i = 0; i < T.length - U.length + 1; i++) {
  let ok = true;
  for (let j = 0; j < U.length; j++) {
    if (T[i + j] !== '?' && T[i + j] !== U[j]) {
      ok = false;
      break;
    }
  }
  if (ok) {
    console.log('Yes');
    return;
  }
}
console.log('No');
