const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const A = input[0].split(' ').map(Number);

const set = new Set();
let cnt = 0;
for (let i = 0; i < A.length; i++) {
  if (set.has(A[i])) {
    set.delete(A[i]);
    cnt++;
  } else {
    set.add(A[i]);
  }
}
console.log(cnt);
