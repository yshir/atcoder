const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, W] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

let ans = 0;
for (let i = 0; i < 1 << N; i++) {
  let score = 0;
  let weight = 0;
  for (let j = 0; j < N; j++) {
    if (i & (1 << j)) {
      const [a, b] = A[j];
      score += a;
      weight += b;
    }
  }
  if (weight <= W) ans = Math.max(ans, score);
}
console.log(ans);
