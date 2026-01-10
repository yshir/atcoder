const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const S = [...String(N)].map(Number);

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

let ans = 0;
for (const A of distinct_permutations(S)) {
  for (let i = 0; i < A.length - 1; i++) {
    ans = Math.max(ans, Number(A.slice(0, i + 1).join('')) * Number(A.slice(i + 1).join('')));
  }
}
console.log(ans);
