const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

for (let i = 0; i < N; i++) {
  let total = 0;
  for (let j = 0; j < N; j++) {
    if (i !== j) total += A[j];
  }
  if (total === M) {
    console.log('Yes');
    return;
  }
}
console.log('No');
