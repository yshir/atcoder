const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}
for (let i = 0; i < N - 1; i++) {
  let [u, v] = input[i + 2].split(' ').map(Number);
  u--;
  v--;
  G[u].push(v);
  G[v].push(u);
}

const ans = [];
const set = new Set();

const dfsNo = (u, p) => {
  ans[u] = false;
  set.add(A[u]);
  for (const v of G[u]) {
    if (v === p) continue;
    if (set.has(A[v])) {
      dfsYes(v, u);
    } else {
      dfsNo(v, u);
    }
  }
  set.delete(A[u]);
};

const dfsYes = (u, p) => {
  ans[u] = true;
  for (const v of G[u]) {
    if (v === p) continue;
    dfsYes(v, u);
  }
};

dfsNo(0, -1);

console.log(ans.map((x) => (x ? 'Yes' : 'No')).join('\n'));
