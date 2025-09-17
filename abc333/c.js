const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [1, 1, 1];
for (let i = 1; i < N; i++) {
  if (A[0] === A[1] && A[1] === A[2]) {
    A[0] = 1;
    A[1] = 1;
    A[2]++;
  } else if (A[0] == A[1]) {
    A[0] = 1;
    A[1]++;
  } else {
    A[0]++;
  }
}

let sum = 0n;
for (let i = 0; i < A[0]; i++) {
  sum += 10n ** BigInt(i);
}
for (let i = 0; i < A[1]; i++) {
  sum += 10n ** BigInt(i);
}
for (let i = 0; i < A[2]; i++) {
  sum += 10n ** BigInt(i);
}
console.log(sum.toString());
