const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const [M] = input[2].split(' ').map(Number);
const B = input[3].split(' ').map(Number);
const [L] = input[4].split(' ').map(Number);
const C = input[5].split(' ').map(Number);
const [Q] = input[6].split(' ').map(Number);
const X = input[7].split(' ').map(Number);

const set = new Set();
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < L; k++) {
      set.add(A[i] + B[j] + C[k]);
    }
  }
}

for (let i = 0; i < Q; i++) {
  if (set.has(X[i])) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
