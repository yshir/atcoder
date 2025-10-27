const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const E = [];
for (let i = 0; i < M; i++) {
  let [u, v] = input[i + 1].split(' ').map(Number);
  u--;
  v--;
  E.push([u, v]);
}

let ans = Number.MAX_VALUE;

for (let i = 0; i < 1 << N; i++) {
  const P = [];
  for (let j = 0; j < N; j++) {
    P[j] = (i >> j) & 1;
  }

  let cnt = 0;
  for (let j = 0; j < M; j++) {
    const [u, v] = E[j];
    if (P[u] === P[v]) {
      cnt++;
    }
  }
  ans = Math.min(ans, cnt);
}

console.log(ans);
