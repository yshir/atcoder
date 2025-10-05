const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

for (let i = N - 1; i >= 0; i--) {
  console.log(input[i + 1]);
}
