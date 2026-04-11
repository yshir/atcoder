const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T, X] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const ans = [];
for (let i = 0; i <= T; i++) {
  if (i === 0) {
    ans.push([i, A[i]]);
    continue;
  }

  const prev = ans[ans.length - 1][1];
  if (prev + X <= A[i] || prev - X >= A[i]) {
    ans.push([i, A[i]]);
  }
}

console.log(ans.map((x) => x.join(' ')).join('\n'));
