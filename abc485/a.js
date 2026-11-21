const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);

if ((A > 0 && B > 0) || (A < 0 && B < 0)) {
  console.log('Yes');
} else {
  console.log('No');
}
