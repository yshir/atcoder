const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, Y, Z] = input[0].split(' ').map(Number);

let x = X;
let y = Y;
for (let i = 0; i < 10 ** 5; i++) {
  if (x > y && x / y === Z) {
    console.log('Yes');
    return;
  }
  x++;
  y++;
}
console.log('No');
