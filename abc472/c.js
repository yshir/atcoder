const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, M, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const ans = [];
let cur = 0;
for (let i = 0; i < N; i++) {
  if (cur + A[i] <= K) {
    cur += A[i];
    ans[i] = 1;
  } else {
    ans[i] = 0;
  }
  const j = i - M + 1;
  if (j >= 0 && ans[j]) {
    cur -= A[j];
  }
}
console.log(ans.map((x) => (x ? 'Yes' : 'No')).join('\n'));
