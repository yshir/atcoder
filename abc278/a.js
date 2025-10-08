const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
let A = input[1].split(' ').map(Number);

for (let i = 0; i < K; i++) {
  A = [...A.slice(1), 0];
}

console.log(A.join(' '));
