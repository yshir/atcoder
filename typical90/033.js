const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

if (H === 1) {
  console.log(W);
  return;
}
if (W === 1) {
  console.log(H);
  return;
}
console.log(Math.ceil(H / 2) * Math.ceil(W / 2));
