const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = '';
}

let S = '';

for (let i = 0; i < Q; i++) {
  const query = input[i + 1].split(' ');
  if (query[0] === '1') {
    const [, p] = query;
    A[Number(p) - 1] = S;
  }
  if (query[0] === '2') {
    const [, p, s] = query;
    A[Number(p) - 1] += s;
  }
  if (query[0] === '3') {
    const [, p] = query;
    S = A[Number(p) - 1];
  }
}

console.log(S);
