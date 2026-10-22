const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const E = [];
for (let i = 0; i < N - 1; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  E[i] = [a, b];
}

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}
for (let i = 0; i < N - 1; i++) {
  const [a, b] = E[i];
  G[a].push(b);
  G[b].push(a);
}

const C = new Int32Array(N).fill(-1);

const dfs1 = (u, p = null) => {
  let cnt = 1;
  for (const v of G[u]) {
    if (v === p) continue;
    if (C[v] !== -1) continue;
    cnt += dfs1(v, u);
  }
  C[u] = cnt;
  return cnt;
};
dfs1(0);

const D = new BigInt64Array(N);
for (let i = 0; i < N - 1; i++) {
  let [a, b] = E[i];
  if (C[a] < C[b]) [a, b] = [b, a];

  if (C[b] > N - C[b]) {
    D[b] += BigInt(i + 1);
  } else {
    D[0] += BigInt(i + 1);
    D[b] -= BigInt(i + 1);
  }
}

const A = new BigInt64Array(N);
const dfs2 = (u, p = null, w = 0n) => {
  const x = w + D[u];
  A[u] = x;
  for (const v of G[u]) {
    if (v === p) continue;
    dfs2(v, u, x);
  }
};
dfs2(0);

console.log(A.join(' '));
