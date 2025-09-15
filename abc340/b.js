const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);
const A = [];

for (let i = 0; i < Q; i++) {
  const query = input[i + 1].split(' ').map(Number);

  if (query[0] === 1) {
    const [, x] = query;
    A.push(x);
  }
  if (query[0] === 2) {
    const [, k] = query;
    console.log(A[A.length - k]);
  }
}
