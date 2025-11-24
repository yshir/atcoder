const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const E = Array(N).fill(0);
for (let i = 0; i < N - 1; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  E[a]++;
  E[b]++;
}

for (let i = 0; i < N; i++) {
  if (E[i] === N - 1) {
    console.log('Yes');
    return;
  }
}
console.log('No');
