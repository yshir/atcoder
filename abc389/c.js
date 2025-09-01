const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);

let head = 0;
const A = [0];

for (let i = 0; i < Q; i++) {
  const query = input[i + 1].split(' ').map(Number);
  if (query[0] === 1) {
    const [, l] = query;
    A.push(l + A[A.length - 1]);
  }
  if (query[0] === 2) {
    head++;
  }
  if (query[0] === 3) {
    const [, k] = query;
    console.log(A[head - 1 + k] - A[head]);
  }
}
