const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const P = [];
for (let i = 0; i < N; i++) {
  P[i] = input[i + 1].split(' ').map(Number);
}
P.sort((x, y) => x[0] - y[0]);

let min_y = P[0][1];
let cnt = 1;

for (let i = 1; i < N; i++) {
  const [x, y] = P[i];
  if (min_y < y) {
    continue;
  }
  cnt++;
  min_y = Math.min(min_y, y);
}

console.log(cnt);
