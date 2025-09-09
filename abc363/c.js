const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const S = input[1];

function distinct_permutations(iterable) {
  const items = [...iterable].sort();
  const used = Array(items.length).fill(false);
  const curr = [];
  const result = [];

  function dfs() {
    if (curr.length === items.length) {
      result.push(curr.slice());
      return;
    }
    for (let i = 0; i < items.length; i++) {
      if (used[i]) continue;
      if (i > 0 && items[i] === items[i - 1] && !used[i - 1]) continue;
      used[i] = true;
      curr.push(items[i]);
      dfs();
      curr.pop();
      used[i] = false;
    }
  }

  dfs();
  return result;
}

// perf
if (S.length === new Set([...S]).size) {
  const f = (n) => {
    if (n === 1) return 1;
    return n * f(n - 1);
  };
  console.log(f(S.length));
  return;
}

let cnt = 0;
for (const str of distinct_permutations([...S])) {
  let contains = false;
  for (let i = 0; i < N - K + 1; i++) {
    let palindrome = true;
    for (let j = 0; j < K; j++) {
      if (str[i + j] !== str[i + K - j - 1]) {
        palindrome = false;
        break;
      }
    }
    if (palindrome) {
      contains = true;
      break;
    }
  }
  if (!contains) cnt++;
}
console.log(cnt);
