const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const ans = [0, 0, 0];
for (let i = 0; i < N; i++) {
  const divided = Math.ceil(A[i] / 1000);
  let rem = divided * 1000 - A[i];
  ans[0] += Math.floor(rem / 100);
  rem -= Math.floor(rem / 100) * 100;
  ans[1] += Math.floor(rem / 10);
  rem -= Math.floor(rem / 10) * 10;
  ans[2] += rem;
}
console.log(ans.reverse().join(' '));
