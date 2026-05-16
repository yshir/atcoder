let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

while (T--) {
  const [N, C] = input[line++].split(' ').map(Number);
  const S = [];
  for (let i = 0; i < N; i++) {
    S[i] = input[line++].split('');
  }

  const B = [];
  for (let i = 0; i < N; i++) B[i] = null;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (S[i][j] === '#') {
        B[j] = i;
      }
    }
  }

  const dp = [];
  for (let i = 0; i < N; i++) {
    dp[i] = [];
    for (let j = 0; j < N; j++) {
      dp[i][j] = 0;
    }
  }
  dp[N - 1][C - 1] = 1;

  for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j < N; j++) {
      if (dp[i][j] === 0) continue;
      for (let k = -1; k <= 1; k++) {
        const ni = i - 1;
        const nj = j + k;
        if (ni < 0 || nj < 0 || nj >= N) continue;

        if (S[ni][nj] === '.') {
          dp[ni][nj] = 1;
        }
        if (S[ni][nj] === '#') {
          if (B[nj] !== null && B[nj] === ni) {
            B[nj] = null;
            for (let nni = ni; nni >= 0; nni--) {
              dp[nni][nj] = 1;
            }
          }
        }
      }
    }
  }

  const ans = [];
  for (let i = 0; i < N; i++) ans.push(dp[0][i]);
  console.log(ans.join(''));
}
