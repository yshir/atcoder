const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

if (S === T) {
  console.log('Yes');
  return;
}

for (let i = 0; i < S.length - 1; i++) {
  const U = [...S];
  [U[i], U[i + 1]] = [U[i + 1], U[i]];
  const V = U.join('');
  if (T === V) {
    console.log('Yes');
    return;
  }
}

console.log('No');
