const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const G = [];
for (let i = 0; i < N; i++) G[i] = [];
for (let i = 0; i < N - 1; i++) {
  let [u, v] = input[i + 1].split(' ').map(Number);
  u--;
  v--;
  G[u].push(v);
  G[v].push(u);
}

const dfs = (u, p) => {
  let cnt = 1;
  for (const v of G[u]) {
    if (v !== p) {
      cnt += dfs(v, u);
    }
  }
  return cnt;
};

const K = [];
for (const v of G[0]) {
  K.push(dfs(v, 0));
}
K.sort((a, b) => a - b);

let ans = 1;
for (let i = 0; i < K.length - 1; i++) {
  ans += K[i];
}
console.log(ans);
