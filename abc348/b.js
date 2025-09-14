const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const X = [];
const Y = [];
for (let i = 0; i < N; i++) {
  const [xx, yy] = input[i + 1].split(' ').map(Number);
  X[i] = xx;
  Y[i] = yy;
}

for (let i = 0; i < N; i++) {
  const [ax, ay] = [X[i], Y[i]];

  let max = 0;
  let max_i = 0;
  for (let j = 0; j < N; j++) {
    const [bx, by] = [X[j], Y[j]];
    const cur = (bx - ax) ** 2 + (by - ay) ** 2;
    if (cur > max) {
      max = cur;
      max_i = j;
    }
  }
  console.log(max_i + 1);
}
