const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, C, D] = input[0].split(' ').map(Number);

if (A > C || (A === C && B > D)) {
  console.log('Yes');
} else {
  console.log('No');
}
