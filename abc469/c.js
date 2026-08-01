const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = A[i - 1] || 0;
  A[i] += S[i] === 'o' ? 1 : 0;
}

const ans = [];
for (let i = 0; i < N; i++) {
  let l = i;
  let k = A[l];
  let r = Math.min(l + k, N - 1);
  while (l !== r) {
    k = A[r] - A[l];
    l = r;
    r = Math.min(l + k, N - 1);
  }
  ans.push(r + 1);
}
console.log(ans.join('\n'));
