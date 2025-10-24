const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Y] = input[0].split(' ').map(Number);

if (Y % 4 === 0) {
  console.log(Y + 2);
}
if (Y % 4 === 1) {
  console.log(Y + 1);
}
if (Y % 4 === 2) {
  console.log(Y);
}
if (Y % 4 === 3) {
  console.log(Y + 3);
}
