const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = [];
for (let i = 0; i < 8; i++) {
  S[i] = input[i];
}

const v = [...'87654321'];
const h = [...'abcdefgh'];

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (S[i][j] === '*') {
      console.log(h[j] + v[i]);
    }
  }
}
