const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

A.sort((x, y) => x - y);

let l = N - 1;
let r = N;
for (let i = 0; i < N; i++) {
  if (A[i] >= 0) {
    r = i;
    l = i - 1;
    break;
  }
}

let ans = 0;
let cur = 0;
while (l >= 0 || r <= N - 1) {
  const ar = A[r] !== undefined ? A[r] : Number.MAX_VALUE;
  const al = A[l] !== undefined ? A[l] : -Number.MAX_VALUE;

  const dr = Math.abs(ar - cur);
  const dl = Math.abs(al - cur);
  if (dr < dl) {
    ans += dr;
    cur = ar;
    r++;
  } else {
    ans += dl;
    cur = al;
    l--;
  }
}

console.log(ans);
