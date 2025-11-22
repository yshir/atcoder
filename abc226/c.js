const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const S = [];

for (let i = 0; i < N; i++) {
  const [T, K, ...A] = input[i + 1].split(' ').map(Number);
  S[i] = { T, A };
}

let ans = 0;
const seen = new Set();
const dfs = (i) => {
  if (seen.has(i)) return;
  seen.add(i);
  ans += S[i].T;
  for (const a of S[i].A) {
    dfs(a - 1);
  }
};
dfs(N - 1);
console.log(ans);
