const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [K] = input[0].split(' ').map(Number);

const MOD = 1e9 + 7;

const dp = [1];
for (let i = 1; i <= K; i++) {
  let v = 0;
  for (let j = 1; j <= Math.min(i, 9); j++) {
    v += dp[i - j];
    v %= MOD;
  }
  dp[i] = v;
}
console.log(K % 9 === 0 ? dp[K] : 0);
