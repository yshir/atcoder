const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const A = {};
for (let i = 0; i < Q; i++) {
  let [l, r, x] = input[i + 1].split(' ').map(Number);
  l--;
  r--;
  A[x] = A[x] || [];
  A[x].push([l, r]);
}
for (const k of Object.keys(A)) {
  A[k].sort((a, b) => a[0] - b[0]);
}

const B = new Array(N + 1).fill(0);

for (list of Object.values(A)) {
  let max_r = -1;
  for (const [l, r] of list) {
    if (max_r < l) {
      B[l]++;
      B[r + 1]--;
    } else if (max_r < r) {
      B[max_r + 1]++;
      B[r + 1]--;
    }
    max_r = Math.max(max_r, r);
  }
}

for (let i = 1; i < N; i++) {
  B[i] += B[i - 1];
}
console.log(B.slice(0, N).join(' '));
