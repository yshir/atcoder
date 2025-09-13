const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = 0;
  const ss = input[i + 1].split('');
  for (let j = 0; j < M; j++) {
    if (ss[j] === 'o') {
      S[i] += 1 << (M - j - 1);
    }
  }
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

let ok = 0;
for (let i = 0; i < M; i++) {
  ok = ok | (1 << i);
}

let ans = N;
for (const perm of permutations(
  Array(N)
    .fill(0)
    .map((_, i) => i)
)) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum = sum | S[perm[i]];
    if (sum === ok) {
      ans = Math.min(ans, i + 1);
      break;
    }
  }
}
console.log(ans);
