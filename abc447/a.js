const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);

if (N % 2 === 1) {
  N++;
}

if (N / 2 < M) {
  console.log('No');
} else {
  console.log('Yes');
}
