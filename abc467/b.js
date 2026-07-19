const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let X = 10000;
let Y = 10000;

for (let i = 0; i < N; i++) {
  let [a, b, s] = input[i + 1].split(' ');
  a = Number(a);
  b = Number(b);

  X -= b;
  Y -= b;

  const rem = b - a;
  if (s === 'keep') {
    Y += rem;
  } else {
    X += rem;
    Y += rem;
  }
}

console.log(Y - X);
