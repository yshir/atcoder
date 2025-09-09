const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
let A = input[1].split(' ').map(Number);

let cnt = 0;
while (A.filter((x) => x > 0).length > 1) {
  A = A.sort((a, b) => b - a);
  A[0]--;
  A[1]--;
  cnt++;
}
console.log(cnt);
