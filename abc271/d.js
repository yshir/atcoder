const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const C = [];
for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  C[i] = [a, b];
}

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j <= S; j++) {
    dp[i][j] = false;
  }
}
dp[0][0] = true;

for (let i = 0; i < N; i++) {
  const [a, b] = C[i];
  for (let j = 0; j <= S; j++) {
    if (!dp[i][j]) continue;

    const f = (x) => {
      const ni = i + 1;
      const nj = j + x;
      if (nj <= S) dp[ni][nj] = true;
    };

    f(a);
    f(b);
  }
}

if (!dp[N][S]) {
  console.log('No');
  return;
}

console.log('Yes');

const stack = [];

{
  let j = S;
  for (let i = N; i > 0; i--) {
    const [a, b] = C[i - 1];
    const ni = i - 1;
    const nj_a = j - a;
    const nj_b = j - b;
    if (nj_a >= 0 && dp[ni][nj_a]) {
      j = nj_a;
      stack.push('H');
    } else {
      j = nj_b;
      stack.push('T');
    }
  }
}

console.log(stack.reverse().join(''));
