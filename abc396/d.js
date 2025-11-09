const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const E = [];
for (let i = 0; i < N; i++) {
  E[i] = [];
  for (let j = 0; j < N; j++) {
    E[i][j] = -1n;
  }
}

for (let i = 0; i < M; i++) {
  let [u, v] = input[i + 1].split(' ').map(Number);
  const [, , w] = input[i + 1].split(' ').map(BigInt);
  u--;
  v--;
  E[u][v] = w;
  E[v][u] = w;
}

let ans = 2n ** 60n + 1n;

const visited = {};

const dfs = (u) => {
  if (u === N - 1) {
    let now = 0n;
    for (const k in visited) {
      if (visited[k] !== undefined) {
        now ^= visited[k];
      }
    }
    ans = ans > now ? now : ans;
    return;
  }

  for (let v = 0; v < N; v++) {
    if (E[u][v] === -1n || visited[v] !== undefined) continue;
    visited[v] = E[u][v];
    dfs(v, E[u][v]);
    visited[v] = undefined;
  }
};

visited[0] = 0n;
dfs(0);

console.log(ans.toString());
