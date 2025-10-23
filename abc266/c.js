const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const P = [];
for (let i = 0; i < 4; i++) {
  P[i] = input[i].split(' ').map(Number);
}

for (let i = 0; i < 4; i++) {
  const A = P[i];
  const B = P[(i + 1) % 4];
  const C = P[(i + 2) % 4];

  const ab = [B[0] - A[0], B[1] - A[1]];
  const bc = [C[0] - B[0], C[1] - B[1]];

  const cross = ab[0] * bc[1] - ab[1] * bc[0];
  if (cross < 0) {
    console.log('No');
    return;
  }
}

console.log('Yes');
