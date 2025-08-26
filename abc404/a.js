const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const A = [...'abcdefghijklmnopqrstuvwxyz'];

for (let i = 0; i < S.length; i++) {
  const idx = A.findIndex((a) => a === S[i]);
  if (idx !== -1) {
    A.splice(idx, 1);
  }
}

console.log(A[0]);
