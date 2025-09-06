const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}
const [Q] = input[1 + N].split(' ').map(Number);

for (let i = 0; i < Q; i++) {
  const [t, d] = input[i + 2 + N].split(' ').map(Number);
  const [q, r] = A[t - 1];

  if (d % q === r) {
    console.log(d);
    continue;
  }

  if (d % q < r) {
    console.log(d + (r - (d % q)));
    continue;
  }

  if (d % q > r) {
    console.log(d + (q - ((d % q) - r)));
    continue;
  }
}
