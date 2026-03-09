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

const compress = new Map([...new Set(A)].map((v, i) => [v, i]));
const B = A.map((x) => compress.get(x));
const freq = new Int32Array(N);

const ans = [];
let cnt = 0;

const dfs = (u, p) => {
  const adding = freq[B[u]] === 0;
  if (adding) {
    freq[B[u]]++;
  } else {
    cnt++;
  }

  ans[u] = cnt > 0;
  for (const v of G[u]) {
    if (v === p) continue;
    dfs(v, u);
  }

  if (adding) {
    freq[B[u]]--;
  } else {
    cnt--;
  }
};

dfs(0, -1);

console.log(ans.map((x) => (x ? 'Yes' : 'No')).join('\n'));
