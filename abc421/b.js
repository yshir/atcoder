const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, Y] = input[0].split(' ').map(Number);

let a = X;
let b = Y;
for (let i = 0; i < 8; i++) {
  const c = Number([...String(a + b)].reverse().join(''));
  [a, b] = [b, c];
}
console.log(b);
