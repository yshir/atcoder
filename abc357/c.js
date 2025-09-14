const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let S = [['#']];
for (let n = 0; n < N; n++) {
  const L = S.length;

  const T = [];
  for (let i = 0; i < L * 3; i++) {
    T[i] = [];
    for (let j = 0; j < L * 3; j++) {
      T[i][j] = '.';
    }
  }

  for (let i = 0; i < L * 3; i++) {
    for (let j = 0; j < L * 3; j++) {
      T[i][j] = S[i % L][j % L];
    }
  }

  for (let i = L; i < L * 3 - L; i++) {
    for (let j = L; j < L * 3 - L; j++) {
      T[i][j] = '.';
    }
  }

  S = T;
}

for (let i = 0; i < S.length; i++) {
  console.log(S[i].join(''));
}
