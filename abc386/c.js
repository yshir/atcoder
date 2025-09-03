const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [K] = input[0].split(' ').map(Number);
let S = input[1];
let T = input[2];

if (S.length === T.length) {
  let diff = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== T[i]) diff++;
  }
  if (diff <= 1) {
    console.log('Yes');
    return;
  }
}

if (Math.abs(S.length - T.length) === 1) {
  if (S.length < T.length) {
    [S, T] = [T, S];
  }

  let i = 0;
  let j = 0;
  while (i < S.length && j < T.length) {
    if (S[i] === T[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }

  if (i - j <= 1) {
    console.log('Yes');
    return;
  }
}

console.log('No');
