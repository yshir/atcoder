const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (A[j] === B[i]) {
      A.splice(j, 1);
      break;
    }
    if (A[j] > B[i]) {
      break;
    }
  }
}

console.log(A.join(' '));
