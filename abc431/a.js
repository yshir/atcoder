const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, B] = input[0].split(' ').map(Number);

if (H <= B) {
  console.log(0);
} else {
  console.log(H - B);
}
