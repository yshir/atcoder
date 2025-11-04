const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

for (let i = 0; i < M; i++) {
  const idx = A.findIndex((x) => x === B[i]);
  if (idx === -1) {
    console.log('No');
    return;
  }
  A.splice(idx, 1);
}
console.log('Yes');
