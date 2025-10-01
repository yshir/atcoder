const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, D] = input[0].split(' ').map(Number);
const T = input[1].split(' ').map(Number);

for (let i = 0; i < N - 1; i++) {
  if (T[i + 1] - T[i] <= D) {
    console.log(T[i + 1]);
    return;
  }
}
console.log(-1);
