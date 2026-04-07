const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, M] = input[0].split(' ');
N = BigInt(N);
M = Number(M);

const P = [];
for (let i = 0; i < M; i++) {
  const [x, y, c] = input[i + 1].split(' ');
  P.push([BigInt(x), BigInt(y), c]);
}

P.sort((a, b) => {
  if (a[0] > b[0]) return -1;
  if (a[0] < b[0]) return 1;
  if (a[2] === 'B' && b[2] === 'W') return -1;
  if (a[2] === 'W' && b[2] === 'B') return 1;
  return 0;
});

let max_y = 0n;
for (let i = 0; i < M; i++) {
  const [_, y, c] = P[i];
  if (c === 'B') {
    max_y = max_y < y ? y : max_y;
  } else {
    if (max_y >= y) {
      console.log('No');
      return;
    }
  }
}

console.log('Yes');
