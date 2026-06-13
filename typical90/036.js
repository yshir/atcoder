let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, Q] = input[line++].split(' ').map(Number);

const P = [];
for (let i = 0; i < N; i++) {
  P[i] = input[line++].split(' ').map(Number);
}

const R = [];
for (let i = 0; i < N; i++) {
  const [x, y] = P[i];
  R[i] = [x - y, x + y];
}

const min_x = Math.min(...R.map((r) => r[0]));
const max_x = Math.max(...R.map((r) => r[0]));
const min_y = Math.min(...R.map((r) => r[1]));
const max_y = Math.max(...R.map((r) => r[1]));

while (Q--) {
  const [q] = input[line++].split(' ').map(Number);
  const [x, y] = R[q - 1];
  console.log(
    Math.max(
      Math.abs(x - min_x), //
      Math.abs(x - max_x),
      Math.abs(y - min_y),
      Math.abs(y - max_y),
    ),
  );
}
