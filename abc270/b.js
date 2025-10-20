const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [X, Y, Z] = input[0].split(' ').map(Number);

if (Y < 0) {
  X *= -1;
  Y *= -1;
  Z *= -1;
}

if (X < Y) {
  console.log(Math.abs(X));
  return;
}

if (Y < Z) {
  console.log(-1);
  return;
}

console.log(Math.abs(Z) + X - Z);
