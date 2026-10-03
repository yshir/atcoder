const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let [S, K] = input[0].split(' ');
K = Number(K);

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

const candidates = distinct_permutations([...S])
  .map((x) => x.join(''))
  .sort((a, b) => a - b);
console.log(candidates[K - 1]);
