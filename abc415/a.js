const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const [X] = input[2].split(' ').map(Number);

let ok = false;
for (let i = 0; i < N; i++) {
  if (A[i] === X) {
    ok = true;
    break;
  }
}
console.log(ok ? 'Yes' : 'No');
