const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const X = input[1].split(' ').map(Number);

X.sort((a, b) => a - b);

let sum = 0;
for (let i = N; i < 5 * N - N; i++) {
  sum += X[i];
}
console.log(sum / (3 * N));
