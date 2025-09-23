const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1].split('');
}

const ans = [];
for (let i = 0; i < N - 8; i++) {
  for (let j = 0; j < M - 8; j++) {
    const f = (i, j) => {
      for (let ni = 0; ni < 3; ni++) {
        for (let nj = 0; nj < 3; nj++) {
          if (S[i + ni][j + nj] !== '#') {
            return false;
          }
          if (S[i + ni + 6][j + nj + 6] !== '#') {
            return false;
          }
        }
      }

      for (let nx = 0; nx < 4; nx++) {
        if (S[i + nx][j + 3] !== '.') {
          return false;
        }
        if (S[i + 3][j + nx] !== '.') {
          return false;
        }
        if (S[i + nx + 5][j + 5] !== '.') {
          return false;
        }
        if (S[i + 5][j + nx + 5] !== '.') {
          return false;
        }
      }

      return true;
    };

    if (f(i, j)) {
      ans.push([i + 1, j + 1]);
    }
  }
}

for (let i = 0; i < ans.length; i++) {
  console.log(ans[i].join(' '));
}
