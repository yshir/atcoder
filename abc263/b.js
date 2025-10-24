const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);

let cnt = 0;
let n = N;
while (n !== 1) {
  n = P[n - 2];
  cnt++;
}
console.log(cnt);
