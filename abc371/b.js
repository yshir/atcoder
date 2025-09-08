const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const H = Array(N).fill(0);
for (let i = 0; i < M; i++) {
  const [A, B] = input[i + 1].split(' ');
  if (B === 'M' && H[Number(A) - 1] === 0) {
    console.log('Yes');
    H[Number(A) - 1] = 1;
  } else {
    console.log('No');
  }
}
