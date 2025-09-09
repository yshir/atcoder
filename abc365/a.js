const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Y] = input[0].split(' ').map(Number);

if (Y % 4 !== 0) {
  console.log(365);
} else if (Y % 100 !== 0) {
  console.log(366);
} else if (Y % 400 !== 0) {
  console.log(365);
} else {
  console.log(366);
}
