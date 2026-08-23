let line = 0;
const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

while (T--) {
  const [N, M] = input[line++].split(' ').map(Number);
  const G = [];
  for (let i = 0; i < N; i++) G[i] = [];
  for (let i = 0; i < M; i++) {
    let [a, b] = input[line++].split(' ').map(Number);
    a--;
    b--;
    G[a].push(b);
    G[b].push(a);
  }
  const D = new Uint32Array(N);
  const history = [];
  const dfs = (u, p = null) => {
    history.push(u);
    for (const v of G[u]) {
      if (v === p) continue;
      if (D[v] > 0) {
        if ((D[u] + 1 - D[v]) % 2 === 1) {
          history.push(v);
          return true;
        } else {
          continue;
        }
      }
      D[v] = D[u] + 1;
      if (dfs(v, u)) return true;
    }
    history.pop();
    return false;
  };
  D[0] = 1;
  const ret = dfs(0);
  if (!ret) {
    console.log(-1);
  } else {
    const route = [history.pop()];
    while (history.length) {
      const u = history.pop();
      if (u === route[0]) {
        break;
      }
      route.push(u);
    }
    console.log(route.length);
    console.log(route.map((x) => x + 1).join(' '));
  }
}
