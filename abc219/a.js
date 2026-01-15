const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X] = input[0].split(' ').map(Number);

if (X < 40) {
  console.log(40 - X);
} else if (X < 70) {
  console.log(70 - X);
} else if (X < 90) {
  console.log(90 - X);
} else {
  console.log('expert');
}
