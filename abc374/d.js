const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, S, T] = input[0].split(' ').map(Number);
const L = [];
for (let i = 0; i < N; i++) {
  L[i] = input[i + 1].split(' ').map(Number);
}

function distinct_permutations(iterable) {
  const items = [...iterable].sort(); // 重複除去ロジックのためソート
  const used = new Array(items.length).fill(false);
  const path = [];
  const result = [];

  function dfs() {
    if (path.length === items.length) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < items.length; i++) {
      if (used[i]) continue;
      // 直前と同じ値だが直前が未使用ならスキップ（重複生成を防止）
      if (i > 0 && items[i] === items[i - 1] && !used[i - 1]) continue;
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

let ans = Number.MAX_SAFE_INTEGER;

for (const p of distinct_permutations(
  Array(N)
    .fill(0)
    .map((_, i) => i),
)) {
  for (let i = 0; i < 1 << N; i++) {
    let cur = 0;
    let pos = [0, 0];
    for (let j = 0; j < N; j++) {
      const [a, b, c, d] = L[p[j]];
      let start, end;
      if ((i >> j) & 1) {
        start = [a, b];
        end = [c, d];
      } else {
        start = [c, d];
        end = [a, b];
      }

      // pos -> start
      const r1 = Math.sqrt((pos[0] - start[0]) ** 2 + (pos[1] - start[1]) ** 2);
      cur += r1 / S;

      // start -> end
      const r2 = Math.sqrt((end[0] - start[0]) ** 2 + (end[1] - start[1]) ** 2);
      cur += r2 / T;

      pos = [...end];
    }
    ans = Math.min(ans, cur);
  }
}

console.log(ans);
