const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, X, Y] = input[0].split(' ').map(Number);
X--;
Y--;

const E = [];
for (let i = 0; i < N; i++) {
  E[i] = [];
}

for (let i = 0; i < N - 1; i++) {
  let [u, v] = input[i + 1].split(' ').map(Number);
  u--;
  v--;
  E[u].push(v);
  E[v].push(u);
}

let path = [];
const seen = new Set();

const push = (v) => {
  path.push(v);
  seen.add(v);
};

const pop = (v) => {
  path.pop();
  seen.delete(v);
};

let ok = false;
const dfs = (v) => {
  if (ok) return;

  if (v === Y) {
    console.log(path.map((x) => x + 1).join(' '));
    ok = true;
    return;
  }

  for (const u of E[v]) {
    if (!seen.has(u)) {
      push(u);
      dfs(u);
      pop(u);
    }
  }
};

push(X);
dfs(X);
