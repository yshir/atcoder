const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X] = input[0].split(' ').map(Number);

let sum = 0;
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    if (i * j !== X) {
      sum += i * j;
    }
  }
}
console.log(sum);
