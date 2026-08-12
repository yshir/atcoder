const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, K] = input[0].split(' ').map(BigInt);
N = Number(N);

const A = [];

{
  A[0] = [];
  for (let x = 0; x < 1e5; x++) {
    const y = String(x)
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0);
    A[0][x] = (x + y) % 1e5;
  }
}

for (let i = 0; i < 100; i++) {
  A[i + 1] = [];
  for (let x = 0; x < 1e5; x++) {
    A[i + 1][x] = A[i][A[i][x]];
  }
}

let cur = N;
for (let i = 0n; ; i += 1n) {
  if (K >> i === 0n) break;
  if (((K >> i) & 1n) === 1n) {
    cur = A[i][cur];
  }
}
console.log(cur);
