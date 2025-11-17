const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [S, T, X] = input[0].split(' ').map(Number);

if (S < T) {
  console.log(S <= X && X < T ? 'Yes' : 'No');
} else {
  console.log((S <= X && X < 24) || (0 <= X && X < T) ? 'Yes' : 'No');
}
