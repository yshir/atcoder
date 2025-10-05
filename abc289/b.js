const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = (input[1] || '').split(' ').map(Number);

let B = Array(N)
  .fill(0)
  .map((_, i) => i + 1);

let l = 0;
let r = 0;
while (l < M) {
  while (A[r + 1] - A[r] === 1) {
    r++;
  }

  B = [
    ...B.slice(0, A[l] - 1), //
    ...B.slice(A[l] - 1, A[r] + 1).reverse(),
    ...B.slice(A[r] + 1),
  ];

  l = r + 1;
  r = l;
}

console.log(B.join(' '));
