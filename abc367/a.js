const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B, C] = input[0].split(' ').map(Number);

if (B <= C) {
  if (A <= B || C <= A) {
    console.log('Yes');
  } else {
    console.log('No');
  }
} else {
  if (C <= A && A <= B) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
