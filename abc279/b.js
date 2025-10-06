const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

for (let i = 0; i < S.length - T.length + 1; i++) {
  if (T === S.slice(i, i + T.length)) {
    console.log('Yes');
    return;
  }
}

console.log('No');
