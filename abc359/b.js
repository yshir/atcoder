const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let cnt = 0;
for (let i = 0; i < A.length - 2; i++) {
  if (A[i] === A[i + 2]) {
    cnt++;
  }
}
console.log(cnt);
