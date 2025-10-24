const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const E = [];
for (let i = 0; i < N; i++) {
  E[i] = [];
  for (let j = 0; j < M; j++) {
    E[i][j] = 0;
  }
}

for (let i = 0; i < M; i++) {
  let [u, v] = input[i + 1].split(' ').map(Number);
  u--;
  v--;
  E[u][v] = 1;
  E[v][u] = 1;
}

let cnt = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      if (E[i][j] && E[j][k] && E[k][i]) {
        cnt++;
      }
    }
  }
}
console.log(cnt);
