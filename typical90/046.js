const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
const C = input[3].split(' ').map(Number);

const dp = [];
for (let i = 0; i <= 3; i++) {
  dp[i] = [];
  for (let j = 0; j < 46; j++) {
    dp[i][j] = 0;
  }
}
dp[0][0] = 1;

const S = [A, B, C];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 46; j++) {
    for (let k = 0; k < N; k++) {
      const ni = i + 1;
      const nj = (j + S[i][k]) % 46;
      dp[ni][nj] += dp[i][j];
    }
  }
}
console.log(dp[3][0]);
