const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const X = input[0];

const x = Number(X.replace('.', ''));
if (x >= 380) {
  console.log(1);
} else if (x >= 375) {
  console.log(2);
} else {
  console.log(3);
}
