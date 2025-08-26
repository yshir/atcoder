const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, Q] = input[0].split(' ').map(Number);

const A = {};
for (let i = 0; i < N; i++) {
  A[i + 1] = { all: false };
}

for (let i = 0; i < Q; i++) {
  const q = input[i + 1].split(' ').map(Number);
  if (q[0] === 1) {
    const [, x, y] = q;
    A[x][y] = true;
  }
  if (q[0] === 2) {
    const [, x] = q;
    A[x].all = true;
  }
  if (q[0] === 3) {
    const [, x, y] = q;
    if (A[x][y] || A[x].all) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
}
