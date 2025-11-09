const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, Y] = input[0].split(' ').map(Number);

if (Y - X > 0) {
  console.log(Math.ceil((Y - X) / 10));
} else {
  console.log(0);
}
