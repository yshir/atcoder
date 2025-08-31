const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const L = [];
{
  const set = new Set([A[0]]);
  for (let i = 0; i < N; i++) {
    set.add(A[i]);
    L[i] = set.size;
  }
}

const R = [];
{
  const set = new Set();
  for (let i = 0; i < N; i++) {
    set.add(A[N - 1 - i]);
    R[i] = set.size;
  }
}

let max = 0;
for (let i = 0; i < N - 1; i++) {
  const cur = L[i] + R[N - 2 - i];
  if (cur > max) {
    max = cur;
  }
}
console.log(max);
