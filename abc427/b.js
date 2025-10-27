const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [1];

const f = (a) => {
  return String(a)
    .split('')
    .map(Number)
    .reduce((b, c) => b + c, 0);
};

for (let i = 1; i <= N; i++) {
  A[i] = 0;
  for (let j = 0; j < i; j++) {
    A[i] += f(A[j]);
  }
}

console.log(A[N]);
