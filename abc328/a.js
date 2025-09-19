const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);
const S = input[1].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < N; i++) {
  if (S[i] <= X) {
    sum += S[i];
  }
}
console.log(sum);
