const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const D = [];
for (let i = 0; i < N; i++) {
  D[i] = Number(input[i + 1]);
}
console.log(new Set(D).size);
