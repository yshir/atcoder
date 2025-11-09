const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const map = {};
for (let i = 0; i < N; i++) {
  map[A[i]] = map[A[i]] || [];
  map[A[i]].push(i + 1);
}

for (let i = 0; i < Q; i++) {
  const [x, k] = input[i + 2].split(' ').map(Number);
  console.log(map[x] && map[x][k - 1] ? map[x][k - 1] : -1);
}
