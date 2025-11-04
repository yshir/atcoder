const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const A = input[0].split(' ').map(Number);

let now = 0;
for (let i = 0; i < 3; i++) {
  now = A[now];
}
console.log(now);
