const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

for (let i = 1; i <= N; i++) {
  console.log(i <= M ? 'OK' : 'Too Many Requests');
}
