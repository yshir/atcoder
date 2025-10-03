const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
  for (let j = 0; j < N; j++) {
    G[i][j] = 0;
  }
}
for (let i = 0; i < M; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  G[a - 1][b - 1] = 1;
  G[b - 1][a - 1] = 1;
}

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

const f = (E) => {
  const size = E.length;

  if (size === 0) return 0;
  if (size <= 2) return -Number.MAX_VALUE;

  E.push(E[0]);

  let cnt = 0;
  for (let i = 0; i < size; i++) {
    if (G[E[i]][E[i + 1]]) cnt++;
  }
  return cnt;
};

let ans = Number.MAX_VALUE;
for (const perm of permutations(
  Array(N)
    .fill(0)
    .map((_, i) => i)
)) {
  for (let i = 0; i < N; i++) {
    let n = 0;
    n += f(perm.slice(0, i));
    n += f(perm.slice(i));
    ans = Math.min(ans, N + M - 2 * n);
  }
}
console.log(ans);
