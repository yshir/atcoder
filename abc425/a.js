const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += (-1) ** i * i ** 3;
}
console.log(sum);
