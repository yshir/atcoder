const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

for (let i = 1; i <= N; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}
