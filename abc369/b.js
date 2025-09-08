const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let l = -1;
let r = -1;
let ans = 0;
for (let i = 0; i < N; i++) {
  let [A, S] = input[i + 1].split(' ');
  A = Number(A);

  if (S === 'L') {
    if (l !== -1) {
      ans += Math.abs(l - A);
    }
    l = A;
  }
  if (S === 'R') {
    if (r !== -1) {
      ans += Math.abs(r - A);
    }
    r = A;
  }
}

console.log(ans);
