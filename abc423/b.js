const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const L = input[1].split(' ').map(Number);

const set = new Set();

for (let i = 0; i < N; i++) {
  set.add(i);
  if (L[i]) {
    break;
  }
}

for (let i = N; i >= 0; i--) {
  set.add(i);
  if (L[i - 1]) {
    break;
  }
}

console.log(N + 1 - set.size);
