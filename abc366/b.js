const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let M = 0;
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
  M = Math.max(M, S[i].length);
}

const A = [];
for (let i = 0; i < M; i++) {
  A[i] = '';
  for (let j = 0; j < N; j++) {
    const c = S[j][i] || '*';
    if (A[i] !== '' || c !== '*') {
      A[i] += c;
    }
  }
  A[i] = [...A[i]].reverse().join('');
}

for (let i = 0; i < M; i++) {
  console.log(A[i]);
}
