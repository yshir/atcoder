const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

if (S.length % 2 === 1) {
  console.log('No');
  return;
}

const set = new Set();
for (let i = 0; i < S.length; i += 2) {
  if (set.has(S[i])) {
    console.log('No');
    return;
  }
  if (S[i] !== S[i + 1]) {
    console.log('No');
    return;
  }
  set.add(S[i]);
}
console.log('Yes');
