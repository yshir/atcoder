const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [R] = input[0].split(' ').map(Number);

for (let i = 1; i <= 100; i++) {
  if ((R + i) % 100 === 0) {
    console.log(i);
    return;
  }
}
