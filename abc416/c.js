const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K, X] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) S[i] = input[1 + i];

// 1 <= N <= 10
// 1 <= K <= 5
// 1 <= X <= N^K
// なので全列挙で OK
const dfs = (cur, cnt) => {
  if (cnt === K) {
    return [cur];
  }
  let list = [];
  for (let i = 0; i < S.length; i++) {
    list = [...list, ...dfs(`${cur}${S[i]}`, cnt + 1)];
  }
  return list;
};
const list = dfs('', 0);
console.log(list.sort()[X - 1]);
