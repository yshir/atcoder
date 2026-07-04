const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const ans = [];

let head = 0;
let tail = N - 1;

let rev = true;

for (let i = 0; i < N; i++) {
  if (S[N - 1 - i] === 'o') {
    if (rev) {
      ans[head++] = N - i;
    } else {
      ans[tail--] = N - i;
    }
    rev = !rev;
  } else {
    if (rev) {
      ans[tail--] = N - i;
    } else {
      ans[head++] = N - i;
    }
  }
}
console.log(ans.join(' '));
