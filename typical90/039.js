const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const G = [];
for (let i = 0; i < N; i++) G[i] = [];
for (let i = 0; i < N - 1; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  G[a].push(b);
  G[b].push(a);
}

const C = [];
const dfs = (u, p) => {
  let cur = 1;
  for (const v of G[u]) {
    if (v === p) continue;
    cur += dfs(v, u);
  }
  C[u] = cur;
  return cur;
};
dfs(0);

let ans = 0;
for (let i = 0; i < N; i++) {
  ans += C[i] * (N - C[i]);
}
console.log(ans);
