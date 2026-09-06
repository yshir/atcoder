const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [X] = input[0].split(' ').map(Number);

if (X === 1) {
  console.log(2);
} else {
  console.log(1);
}
