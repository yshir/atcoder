const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const map = {};
for (let i = 0; i < N; i++) {
  map[A[i]] = i;
}

for (let i = 0; i < N; i++) {
  const j = map[A[i] - X];
  if (j !== undefined) {
    console.log('Yes');
    return;
  }
}
console.log('No');
