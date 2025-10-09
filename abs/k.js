const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  const [t, x, y] = input[i + 1].split(' ').map(Number);
  A[i] = { t, x, y };
}

A.sort((a, b) => a.t - b.t);

let x = 0;
let y = 0;
let t = 0;
for (let i = 0; i < N; i++) {
  const dt = A[i].t - t;
  const dx = Math.abs(A[i].x - x);
  const dy = Math.abs(A[i].y - y);

  const dd = dx + dy;
  if (dt >= dd && (dt - dd) % 2 === 0) {
    x = A[i].x;
    y = A[i].y;
    t = A[i].t;
  } else {
    console.log('No');
    return;
  }
}

console.log('Yes');
