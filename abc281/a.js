const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

for (let i = N; i >= 0; i--) {
  console.log(i);
}
