const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const S = input[1];

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = A[i - 1] || 0;
  A[i] += S[i] === 'o' ? 1 : 0;
}

let ans = 0;

let r = 0;
for (let l = 0; l < N; l++) {
  while (l < N && S[l] === 'x') l++;
  r = Math.max(r, l);

  while (r < N && A[r] - (A[l - 1] || 0) < K) {
    r++;
  }
  if (A[r] - (A[l - 1] || 0) >= K) {
    ans = Math.max(ans, (A[r] - (A[l - 1] || 0)) / (r - l + 1));
  }
}

console.log(ans);
