const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, C, X] = input[0].split(' ').map(Number);

if (X <= A) {
  console.log(1);
  return;
}
if (X > B) {
  console.log(0);
  return;
}

console.log(C / (B - A));
