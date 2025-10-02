const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const ans = [];
for (let i = 0; i < N; i++) {
  if (A[i] % 2 === 0) {
    ans.push(A[i]);
  }
}
console.log(ans.join(' '));
