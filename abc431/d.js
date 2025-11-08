let _pos = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[_pos++].split(' ').map(Number);

let W = 0;
let V = 0;

const A = [];
for (let i = 0; i < N; i++) {
  const [w, h, b] = input[_pos++].split(' ').map(Number);
  if (h > b) {
    A.push([w, h, b]);
  }
  W += w;
  V += b;
}

const dp_w = Math.floor(W / 2) + 1;

const dp = [];
for (let i = 0; i <= A.length; i++) {
  dp[i] = [];
  for (let j = 0; j < dp_w; j++) {
    dp[i][j] = -1;
  }
}
dp[0][0] = 0;

for (let i = 0; i < A.length; i++) {
  const [w, h, b] = A[i];
  for (let j = 0; j < dp[0].length; j++) {
    if (dp[i][j] === -1) continue;

    // to head
    const head_j = j + w;
    if (head_j < dp_w) {
      dp[i + 1][head_j] = Math.max(dp[i + 1][head_j] || 0, dp[i][j] + h - b);
    }

    // to body
    const body_j = j;
    dp[i + 1][body_j] = Math.max(dp[i + 1][body_j] || 0, dp[i][j]);
  }
}

let max = 0;
for (let j = 0; j < dp_w; j++) {
  max = Math.max(max, dp[dp.length - 1][j]);
}
console.log(V + max);
