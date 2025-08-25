const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const T = input[1].split(' ').map(Number);

let ans = true;
let last = 0;
for (let i = 0; i < N; i++) {
  if (T[i] - last <= S + 0.5) {
    last = T[i];
  } else {
    ans = false;
    break;
  }
}
console.log(ans ? 'Yes' : 'No');
