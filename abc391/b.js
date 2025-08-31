const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1].split('');
}

const T = [];
for (let i = 0; i < M; i++) {
  T[i] = input[i + N + 1].split('');
}

const check = (_i, _j) => {
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < M; j++) {
      if (S[i + _i][j + _j] !== T[i][j]) {
        return false;
      }
    }
  }
  return true;
};

for (let i = 0; i < N - M + 1; i++) {
  for (let j = 0; j < N - M + 1; j++) {
    if (check(i, j)) {
      console.log(i + 1, j + 1);
      return;
    }
  }
}
