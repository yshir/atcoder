const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

let ans = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    const dx = A[i][0] - A[j][0];
    const dy = A[i][1] - A[j][1];
    ans = Math.max(ans, dx ** 2 + dy ** 2);
  }
}
console.log(Math.sqrt(ans));
