const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);

if (a < c) {
  console.log('Takahashi');
  return;
}
if (a > c) {
  console.log('Aoki');
  return;
}
if (b < d) {
  console.log('Takahashi');
  return;
}
if (b > d) {
  console.log('Aoki');
  return;
}

console.log('Takahashi');
