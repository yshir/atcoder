const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

let i = 0;
for (let j = 0; j < S.length; j++) {
  if (S[j].toUpperCase() === T[i]) {
    i++;
    if (i === 2 && T[i] === 'X') i++;
    if (i === 3) break;
  }
}
if (i === 3) {
  console.log('Yes');
} else {
  console.log('No');
}
