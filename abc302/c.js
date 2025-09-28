const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
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

for (const p of permutations(
  Array(N)
    .fill(0)
    .map((_, i) => i)
)) {
  let ok = true;
  for (let i = 0; i < N - 1; i++) {
    const s1 = S[p[i]];
    const s2 = S[p[i + 1]];

    let diff = 0;
    for (let j = 0; j < M; j++) {
      if (s1[j] !== s2[j]) diff++;
    }

    if (diff > 1) {
      ok = false;
      break;
    }
  }

  if (ok) {
    console.log('Yes');
    return;
  }
}

console.log('No');
