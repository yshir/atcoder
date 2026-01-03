const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let cnt = 0;
for (let l = 0; l < N; l++) {
  for (let r = l; r < N; r++) {
    let sum = 0;
    for (let i = l; i <= r; i++) {
      sum += A[i];
    }

    let ok = true;
    for (let i = l; i <= r; i++) {
      if (sum % A[i] === 0) {
        ok = false;
        break;
      }
    }
    if (ok) cnt++;
  }
}
console.log(cnt);
