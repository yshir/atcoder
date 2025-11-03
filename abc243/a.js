const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [V, A, B, C] = input[0].split(' ').map(Number);

let now = V;

while (1) {
  if (now < A) {
    console.log('F');
    return;
  }
  now -= A;
  if (now < B) {
    console.log('M');
    return;
  }
  now -= B;
  if (now < C) {
    console.log('T');
    return;
  }
  now -= C;
}
