const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const T = input[1];
const A = input[2];

let ok = false;
for (let i = 0; i < N; i++) {
  if (T[i] === 'o' && A[i] === 'o') {
    ok = true;
    break;
  }
}
console.log(ok ? 'Yes' : 'No');
