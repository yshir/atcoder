const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const C = [];
for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  C[i] = [a, b];
}

const INF = BigInt(N) * BigInt(1e9);

let sum = 0n;
for (let i = 0; i < N; i++) {
  sum += BigInt(C[i][0]);
}

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let o = 0; o < 2; o++) {
    dp[i][o] = [];
    for (let k = 0; k <= K; k++) {
      dp[i][o][k] = o === 0 ? 0n : -INF;
    }
  }
}

const max = (a, b) => {
  return a > b ? a : b;
};

for (let i = 0; i < N; i++) {
  const [a, b] = C[i];
  const d = BigInt(b - a);
  for (let k = 0; k <= K; k++) {
    for (let o = 0; o < 2; o++) {
      // close
      if (o === 0) {
        dp[i + 1][o][k] = max(dp[i + 1][o][k], dp[i][o][k]); // close -> close
        if (k > 0) {
          dp[i + 1][1][k - 1] = max(dp[i + 1][1][k - 1], dp[i][o][k] + d); // close -> open
          dp[i + 1][o][k - 1] = max(dp[i + 1][o][k - 1], dp[i][o][k] + d); // close -> open -> close
        }
      }

      // open
      if (o === 1) {
        dp[i + 1][o][k] = max(dp[i + 1][o][k], dp[i][o][k] + d); // open -> open
        dp[i + 1][0][k] = max(dp[i + 1][0][k], dp[i][o][k] + d); // open -> close
      }
    }
  }
}

let add = 0n;
for (let o = 0; o < 2; o++) {
  for (let k = 0; k <= K; k++) {
    add = max(add, dp[N][o][k]);
  }
}
console.log((sum + add).toString());
