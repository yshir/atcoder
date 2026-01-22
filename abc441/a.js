const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [P, Q] = input[0].split(' ').map(Number);
const [X, Y] = input[1].split(' ').map(Number);

if (P <= X && X < P + 100 && Q <= Y && Y < Q + 100) {
  console.log('Yes');
} else {
  console.log('No');
}
