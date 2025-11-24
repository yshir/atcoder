const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const B = [];
for (let i = 0; i < N; i++) {
  B[i] = input[i + 1].split(' ').map(Number);
}

const f = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 1; j < M; j++) {
      if (B[i][j] - B[i][j - 1] !== 1) {
        return false;
      }
      if (((B[i][j] - 1) % 7) - ((B[i][j - 1] - 1) % 7) !== 1) {
        return false;
      }
    }

    if (i > 0) {
      for (let j = 0; j < M; j++) {
        if (B[i][j] - B[i - 1][j] !== 7) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(f() ? 'Yes' : 'No');
