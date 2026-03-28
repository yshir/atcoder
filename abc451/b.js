const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const B = [];
for (let i = 0; i < M; i++) B[i] = [0, 0];

for (let i = 0; i < N; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;

  B[a][0]++;
  B[b][1]++;
}

for (let i = 0; i < M; i++) {
  console.log(B[i][1] - B[i][0]);
}
