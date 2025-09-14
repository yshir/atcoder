const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);

if (A === 1 && B === 2) {
  console.log(3);
  return;
}
if (A === 1 && B === 3) {
  console.log(2);
  return;
}
if (A === 2 && B === 1) {
  console.log(3);
  return;
}
if (A === 2 && B === 3) {
  console.log(1);
  return;
}
if (A === 3 && B === 1) {
  console.log(2);
  return;
}
if (A === 3 && B === 2) {
  console.log(1);
  return;
}

console.log(-1);
