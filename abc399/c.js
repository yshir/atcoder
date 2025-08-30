const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
}

// Graph を構築
for (let i = 0; i < M; i++) {
  const [u, v] = input[i + 1].split(' ').map(Number);
  G[u - 1].push(v - 1);
  G[v - 1].push(u - 1);
}

const seen = new Set();
let point_cnt = 0;

// 連結成分の点の数をカウント
const dfs = (u) => {
  if (seen.has(u)) return;
  seen.add(u);
  point_cnt++;
  for (const g of G[u]) {
    dfs(g);
  }
};

// 連結成分ごとに点の数をカウントし、連結成分が木だった場合の辺の数の理論値を合計
let side_cnt = 0;
for (let i = 0; i < N; i++) {
  if (seen.has(i)) continue;
  point_cnt = 0;
  dfs(i);
  side_cnt += point_cnt - 1;
}

// 消したら森になる数の最小値 = 辺の数 - 各連結成分が木だった場合の辺の数の理論値の合計
console.log(M - side_cnt);
