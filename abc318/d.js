const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const N2 = N % 2 === 0 ? N : N + 1;

const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
  for (let j = 0; j < N; j++) {
    G[i][j] = -1;
  }
}

for (let i = 0; i < N - 1; i++) {
  const D = input[i + 1].split(' ').map(Number);
  for (let j = i + 1; j < N; j++) {
    const v = D[j - i - 1];
    G[i][j] = v;
    G[j][i] = v;
  }
}

const used = new Uint8Array(N2);
let ans = -1;

const dfs = (x) => {
  let i = 0;
  while (i < N && used[i]) i++;
  if (i === N) {
    ans = Math.max(ans, x);
  }

  used[i] = 1;
  for (let j = i + 1; j < N2; j++) {
    if (used[j]) continue;
    used[j] = 1;
    const v = j === N ? 0 : G[i][j];
    dfs(x + v);
    used[j] = 0;
  }
  used[i] = 0;
};

dfs(0);
console.log(ans);
