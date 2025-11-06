const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [0];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < B.length; j++) {
    B[j] += A[i];
    B[j] %= 360;
  }
  B.unshift(0);
}
B.sort((a, b) => a - b);
B.push(360);

let ans = 0;
for (let i = 0; i < B.length - 1; i++) {
  ans = Math.max(ans, B[i + 1] - B[i]);
}
console.log(ans);
