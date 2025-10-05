const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const [Q] = input[2].split(' ').map(Number);

for (let i = 0; i < Q; i++) {
  const query = input[i + 3].split(' ').map(Number);
  if (query[0] === 1) {
    const [, k, x] = query;
    A[k - 1] = x;
  } else {
    const [, k] = query;
    console.log(A[k - 1]);
  }
}
