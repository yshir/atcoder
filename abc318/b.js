const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const X = [];
for (let i = 0; i < 100; i++) {
  X[i] = [];
  for (let j = 0; j < 100; j++) {
    X[i][j] = false;
  }
}

for (let i = 0; i < N; i++) {
  const [a, b, c, d] = input[i + 1].split(' ').map(Number);
  for (let x = a; x < b; x++) {
    for (let y = c; y < d; y++) {
      X[x][y] = true;
    }
  }
}

let cnt = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (X[i][j]) cnt++;
  }
}
console.log(cnt);
