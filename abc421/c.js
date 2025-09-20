const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const A = [];
for (let i = 0; i < S.length; i++) {
  if (S[i] === 'A') {
    A.push(i);
  }
}

let ans = Number.MAX_VALUE;

{
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += Math.abs(i * 2 - A[i]);
  }
  ans = Math.min(ans, sum);
}

{
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += Math.abs(i * 2 + 1 - A[i]);
  }
  ans = Math.min(ans, sum);
}

console.log(ans);
