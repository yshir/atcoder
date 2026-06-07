const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

let ans = true;

for (let i = 0; i < N; i++) {
  const ai = A[i] - 1;
  const bi = B[ai] - 1;
  if (bi !== i) {
    ans = false;
    break;
  }
}
console.log(ans ? 'Yes' : 'No');
