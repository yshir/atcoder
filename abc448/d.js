let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[line++].split(' ').map(Number);
const A = input[line++].split(' ').map(Number);

const B = [];

let id = 0;
const id_map = new Map();
for (let i = 0; i < N; i++) {
  let id_ = id_map.get(A[i]);
  if (id_ == null) {
    id_ = id;
    id++;
    id_map.set(A[i], id_);
  }
  B[i] = id_;
}

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}
for (let i = 0; i < N - 1; i++) {
  let [u, v] = input[line++].split(' ').map(Number);
  u--;
  v--;
  G[u].push(v);
  G[v].push(u);
}

const ans = [];
for (let i = 0; i < N; i++) ans[i] = false;

const seen = new Set();
const set = new Set();

const dfs = (i) => {
  if (seen.has(i)) return;
  seen.add(i);

  for (const u of G[i]) {
    if (seen.has(u)) continue;

    if (set.has(B[u])) {
      dfsYes(u);
    } else {
      set.add(B[u]);
      ans[i] = false;
      dfs(u);
      set.delete(B[u]);
    }
  }
};

const dfsYes = (i) => {
  if (seen.has(i)) return;
  seen.add(i);
  ans[i] = true;
  for (const u of G[i]) {
    dfsYes(u);
  }
};

set.add(B[0]);
dfs(0);

console.log(ans.map((x) => (x ? 'Yes' : 'No')).join('\n'));
