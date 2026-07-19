const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

if (W * 100 * 100 >= 25 * H * H) {
  console.log('Yes');
} else {
  console.log('No');
}
