const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const ans = [];
for (let i = 0; i < N; i++) {
  if (A[i] % K === 0) {
    ans.push(A[i] / K);
  }
}
console.log(ans.join(' '));
