const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

if (S[0] !== '<') {
  console.log('No');
  return;
}

for (let i = 1; i < S.length - 1; i++) {
  if (S[i] !== '=') {
    console.log('No');
    return;
  }
}

if (S[S.length - 1] !== '>') {
  console.log('No');
  return;
}

console.log('Yes');
