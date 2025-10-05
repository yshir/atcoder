const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  console.log(a + b);
}
