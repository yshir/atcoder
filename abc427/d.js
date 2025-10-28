const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let pos = 0;
const [T] = input[pos++].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [N, M, K] = input[pos++].split(' ').map(Number);
  const S = input[pos++];
  const E = [];
  for (let j = 0; j < N; j++) {
    E[j] = [];
  }

  for (let j = 0; j < M; j++) {
    let [u, v] = input[pos++].split(' ').map(Number);
    u--;
    v--;
    E[u].push(v);
  }

  const memo = {};
  const memo_k = (u, k, turn) => `${u}_${k}_${turn}`;
  const memo_s = (u, k, turn, ans) => (memo[memo_k(u, k, turn)] = ans);
  const memo_g = (u, k, turn) => memo[memo_k(u, k, turn)];

  const dfs = (u, k, turn) => {
    if (k === 0) {
      return S[u] === 'A' ? 1 : 0;
    }

    let ans = memo_g(u, k, turn);
    if (ans !== undefined) {
      return ans;
    }

    let ok = false;
    for (const v of E[u]) {
      if (dfs(v, k - 1, turn ^ 1) === turn) {
        ok = true;
        break;
      }
    }
    ans = ok ? turn : turn ^ 1;
    memo_s(u, k, turn, ans);
    return ans;
  };

  console.log(dfs(0, K * 2, 1) ? 'Alice' : 'Bob');
}
