const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const A = Array(N).fill(0);
for (let i = 0; i < Q; i++) {
  const ev = input[i + 1].split(' ').map(Number);
  if (ev[0] === 1) {
    A[ev[1] - 1]++;
  }
  if (ev[0] === 2) {
    A[ev[1] - 1] += 2;
  }
  if (ev[0] === 3) {
    console.log(A[ev[1] - 1] >= 2 ? 'Yes' : 'No');
  }
}
