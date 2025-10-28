const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const X = input[1].split(' ').map(Number);
X.sort((a, b) => a - b);

const D = [];
for (let i = 0; i < N - 1; i++) {
  D[i] = X[i + 1] - X[i];
}
D.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i <= D.length - M; i++) {
  sum += D[i];
}
console.log(sum);
