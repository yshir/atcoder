const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const E = [];
for (let i = 0; i < N; i++) {
  E[i] = Array(N).fill(0);
}
for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  E[a][b] = 1;
  E[b][a] = 1;
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

for (const perm of permutations(
  Array(N)
    .fill(0)
    .map((_, idx) => idx)
)) {
  const F = [];
  for (let i = 0; i < N; i++) {
    F[i] = Array(N).fill(0);
  }
  for (let i = 0; i < M; i++) {
    let [a, b] = input[i + M + 1].split(' ').map(Number);
    a--;
    b--;
    a = perm[a];
    b = perm[b];
    F[a][b] = 1;
    F[b][a] = 1;
  }

  let ok = true;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (E[i][j] !== F[i][j]) {
        ok = false;
        break;
      }
    }
  }
  if (ok) {
    console.log('Yes');
    return;
  }
}

console.log('No');
