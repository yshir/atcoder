const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let ans = 0;
for (let i = N / 2; i < N; i++) {
  ans += A[i];
}
console.log(ans);
