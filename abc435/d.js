let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[line++].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}

for (let i = 0; i < M; i++) {
  let [x, y] = input[line++].split(' ').map(Number);
  x--;
  y--;
  G[y].push(x);
}

const [Q] = input[line++].split(' ').map(Number);

const ok = new Set();
const checked = new Set();

for (let i = 0; i < Q; i++) {
  let [q, v] = input[line++].split(' ').map(Number);
  v--;

  if (q === 1) {
    if (checked.has(v)) continue;
    checked.add(v);

    const dfs = (w) => {
      if (ok.has(w)) return;
      ok.add(w);
      for (const u of G[w]) {
        dfs(u);
      }
    };
    dfs(v);
  }
  if (q === 2) {
    console.log(ok.has(v) ? 'Yes' : 'No');
  }
}
