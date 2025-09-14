const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const ans = [];
for (let i = 0; i < N; i++) {
  while (true) {
    const j = A[i] - 1;
    if (j === i) {
      break;
    }
    ans.push([i + 1, j + 1]);
    [A[i], A[j]] = [A[j], A[i]];
  }
}

console.log(ans.length);
for (let i = 0; i < ans.length; i++) {
  console.log(ans[i].join(' '));
}
