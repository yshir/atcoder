const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}

for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  G[a].push(b);
  G[b].push(a);
}

const seen = new Set();
let total = 0n;

const dfs = (u) => {
  let cur = 1;
  for (const v of G[u]) {
    if (!seen.has(v)) {
      seen.add(v);
      cur += dfs(v);
    }
  }
  return cur;
};

for (let i = 0; i < N; i++) {
  if (!seen.has(i)) {
    seen.add(i);
    const p = dfs(i);
    total += (BigInt(p) * BigInt(p - 1)) / 2n;
  }
}

console.log((total - BigInt(M)).toString());
