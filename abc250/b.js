const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, A, B] = input[0].split(' ').map(Number);

const S = [];
for (let i = 0; i < N * A; i++) {
  S[i] = [];
  for (let j = 0; j < N * B; j++) {
    S[i][j] = '@';
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const mark = (i + j) % 2 === 0 ? '.' : '#';
    for (let ii = 0; ii < A; ii++) {
      for (let jj = 0; jj < B; jj++) {
        S[ii + A * i][jj + B * j] = mark;
      }
    }
  }
}

for (let i = 0; i < S.length; i++) {
  console.log(S[i].join(''));
}
