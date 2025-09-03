const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, C] = input[0].split(' ').map(Number);

if (A + B === C || A + C === B || B + C === A || (A == B && B == C)) {
  console.log('Yes');
} else {
  console.log('No');
}
