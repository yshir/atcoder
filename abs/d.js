const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let cnt = 0;
while (true) {
  let ok = true;
  for (let i = 0; i < N; i++) {
    if (A[i] % 2 === 1) {
      ok = false;
      break;
    } else {
      A[i] = A[i] / 2;
    }
  }
  if (!ok) break;
  cnt++;
}
console.log(cnt);
