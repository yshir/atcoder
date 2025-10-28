const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const set = new Set(B.map((x) => x - 1));
const max = Math.max(...A);
for (let i = 0; i < N; i++) {
  if (A[i] === max && set.has(i)) {
    console.log('Yes');
    return;
  }
}
console.log('No');
