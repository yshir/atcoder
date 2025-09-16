const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

if (S[0].toUpperCase() !== S[0]) {
  console.log('No');
  return;
}

for (let i = 1; i < S.length; i++) {
  if (S[i].toLowerCase() !== S[i]) {
    console.log('No');
    return;
  }
}

console.log('Yes');
