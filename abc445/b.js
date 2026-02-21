const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let max = 0;
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
  max = Math.max(max, S[i].length);
}

for (let i = 0; i < N; i++) {
  const remain = max - S[i].length;
  const half = remain / 2;
  console.log('.'.repeat(half) + S[i] + '.'.repeat(half));
}
