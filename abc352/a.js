const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, X, Y, Z] = input[0].split(' ').map(Number);

if (X < Y) {
  if (X < Z && Z < Y) {
    console.log('Yes');
  } else {
    console.log('No');
  }
} else {
  if (Y < Z && Z < X) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
