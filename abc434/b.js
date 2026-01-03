const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < M; i++) {
  A[i] = [];
}

for (let i = 0; i < N; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  A[a].push(b);
}

for (let i = 0; i < M; i++) {
  console.log(A[i].reduce((a, b) => a + b, 0) / A[i].length);
}
