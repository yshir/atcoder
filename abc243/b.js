const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

let cnt1 = 0;
let cnt2 = 0;
for (let i = 0; i < N; i++) {
  if (A[i] === B[i]) cnt1++;
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    if (A[i] === B[j]) cnt2++;
  }
}
console.log(cnt1);
console.log(cnt2);
