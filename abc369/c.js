const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let cnt = 0;
let r = 0;
for (let l = 0; l < N; l++) {
  while (r < N) {
    if (r - l > 1 && A[r] - A[r - 1] !== A[r - 1] - A[r - 2]) {
      break;
    }
    r++;
  }
  cnt += r - l;
}
console.log(cnt);
