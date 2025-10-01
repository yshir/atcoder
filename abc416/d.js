const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [N, M] = input[i * 3 + 1].split(' ').map(Number);
  const A = input[i * 3 + 2].split(' ').map(Number);
  const B = input[i * 3 + 3].split(' ').map(Number);

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  let k = 0;
  let C = 0;
  for (let j = 0; j < N; j++) {
    while (k < N) {
      if (A[j] + B[k] >= M) {
        C++;
        k++;
        break;
      }
      k++;
    }
  }
  console.log(A.reduce((a, b) => a + b, 0) + B.reduce((a, b) => a + b, 0) - C * M);
}
