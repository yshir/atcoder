const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let cur_i = 1;
let cur = A[0];
for (let i = 1; i < N; i++) {
  if (A[i] === cur) {
    cur_i++;
    if (cur_i === 3) {
      console.log('Yes');
      return;
    }
  } else {
    cur = A[i];
    cur_i = 1;
  }
}
console.log('No');
