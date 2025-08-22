const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const T = input[1];

// 0 が偶数個ならば OK
// 0 が奇数個ならば NG
//
// 単純に全列挙すると TLE. dp で解く.
//
// 1 <= r < N のもとで,
// dp[r][0] = T(1,r), T(2,r), ..., T(r,r) のうち 0 が偶数個である部分文字列の個数
// dp[r][1] = T(1,r), T(2,r), ..., T(r,r) のうち 0 が奇数個である部分文字列の個数

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [0, 0];
}
for (let i = 1; i <= N; i++) {
  if (T[i - 1] === '0') {
    dp[i][0] = dp[i - 1][1];
    dp[i][1] = dp[i - 1][0] + 1;
  } else {
    dp[i][0] = dp[i - 1][0] + 1;
    dp[i][1] = dp[i - 1][1];
  }
}

let ans = 0;
for (let i = 0; i <= N; i++) {
  ans += dp[i][0];
}
console.log(ans);
