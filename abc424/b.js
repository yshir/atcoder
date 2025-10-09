const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, K] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = 0;
}

const ans = [];
for (let i = 0; i < K; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  A[a - 1]++;
  if (A[a - 1] === M) ans.push(a);
}
console.log(ans.join(' '));
