const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) A[i] = input[i + 1].split(' ').map(Number);
const [M] = input[1 + N].split(' ').map(Number);
const B = [];
for (let i = 0; i < M; i++) B[i] = input[i + 2 + N].split(' ').map(Number);

function permutations(iterable, k = [...iterable].length) {
  const items = [...iterable];
  const used = new Array(items.length).fill(false);
  const path = [];
  const result = [];

  function dfs() {
    if (path.length === k) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < items.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(items[i]);
      dfs();
      path.pop(); // backtrack
      used[i] = false;
    }
  }

  dfs();
  return result;
}

const C = [];
for (let i = 0; i < N; i++) C[i] = new Set();
for (let i = 0; i < M; i++) {
  let [x, y] = B[i];
  x--;
  y--;
  C[x].add(y);
  C[y].add(x);
}

const INF = Number.MAX_SAFE_INTEGER;

let ans = INF;

for (const perm of permutations(
  Array(N)
    .fill(0)
    .map((_, i) => i),
)) {
  let cur = 0;
  for (let i = 0; i < perm.length; i++) {
    if (i > 0 && C[perm[i]].has(perm[i - 1])) {
      cur = INF;
      break;
    }
    cur += A[perm[i]][i];
  }
  ans = Math.min(ans, cur);
}

console.log(ans === INF ? -1 : ans);
