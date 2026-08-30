const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = Array(K).fill(0);
for (let i = 0; i < N; i++) {
  B[A[i] - 1]++;
}
B.sort((x, y) => y - x);

let ans = 1;
for (let i = 1; i < K; i++) {
  if (B[0] <= B[i] + 1) ans++;
}
console.log(ans);
