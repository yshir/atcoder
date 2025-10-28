const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [];
for (let i = 0; i < K; i++) {
  B[i] = [];
  for (let j = i; j < N; j += K) {
    B[i].push(A[j]);
  }
}

for (let i = 0; i < B.length; i++) {
  B[i].sort((a, b) => a - b);
}

const C = [];
let i = 0;
let j = 0;
while (B[i][j] !== undefined) {
  if (C[C.length - 1] !== undefined && C[C.length - 1] > B[i][j]) {
    console.log('No');
    return;
  }

  C.push(B[i][j]);
  i++;
  if (i === B.length) {
    i = 0;
    j++;
  }
}
console.log('Yes');
