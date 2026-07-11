const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const X = input[1].split(' ').map(Number);

let max = -1;
for (let i = 0; i < N; i++) {
  max = Math.max(max, X[i]);
}
console.log(max < 0 ? 'Yes' : 'No');
