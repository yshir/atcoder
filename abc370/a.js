const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [L, R] = input[0].split(' ').map(Number);

if (L === 0 && R === 0) {
  console.log('Invalid');
}
if (L === 0 && R === 1) {
  console.log('No');
}
if (L === 1 && R === 0) {
  console.log('Yes');
}
if (L === 1 && R === 1) {
  console.log('Invalid');
}
