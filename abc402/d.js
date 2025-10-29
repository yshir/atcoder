const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const F = Array(10 ** 6 + 1).fill(0);
for (let i = 0; i < M; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  F[(a + b) % N]++;
}

let cnt = 0;
for (let i = 0; i < F.length; i++) {
  cnt += (F[i] * (F[i] - 1)) / 2;
}
console.log((M * (M - 1)) / 2 - cnt);
