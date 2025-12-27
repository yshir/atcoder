const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [D, F] = input[0].split(' ').map(Number);

let X = F;
while (1) {
  X += 7;
  if (X > D) {
    break;
  }
}
console.log(X - D);
