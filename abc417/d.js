let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[line++].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[line++].split(' ').map(Number);
}

const dp = [];
for (let x = 0; x <= 1000; x++) {
  dp[x] = [];
  for (let i = 0; i <= N; i++) {
    dp[x][i] = undefined;
  }
}

const dfs = (x, i) => {
  if (dp[x][i] !== undefined) return dp[x][i];
  if (i === N) {
    dp[x][i] = x;
    return x;
  }
  const [p, a, b] = A[i];
  const nx = x <= p ? x + a : Math.max(x - b, 0);
  const ret = dfs(nx, i + 1);
  dp[x][i] = ret;
  return ret;
};

for (let i = 0; i <= N; i++) {
  for (let x = 0; x <= 1000; x++) {
    if (dp[x][i] === undefined) dfs(x, i);
  }
}

const B = [0];
for (let i = 0; i < N; i++) {
  B[i + 1] = B[i] + A[i][2];
}

const lower_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] < n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

let [Q] = input[line++].split(' ').map(Number);
while (Q--) {
  const [X] = input[line++].split(' ').map(Number);

  let i = 0;
  let x = X;
  if (x > 1000) {
    const idx = lower_bound(B, x - 1000);
    if (idx === B.length) {
      console.log(x - B[B.length - 1]);
      continue;
    }
    i += idx;
    x -= B[idx];
  }
  console.log(dp[x][i]);
}
