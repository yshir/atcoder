const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, L, R] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const ans = [];
for (let i = 0; i < N; i++) {
  if (A[i] <= L) {
    ans[i] = L;
  } else if (A[i] >= R) {
    ans[i] = R;
  } else {
    ans[i] = A[i];
  }
}
console.log(ans.join(' '));
