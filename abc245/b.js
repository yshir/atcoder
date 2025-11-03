const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const set = new Set();
for (let i = 0; i < N; i++) {
  set.add(A[i]);
}

for (let i = 0; i <= 2001; i++) {
  if (!set.has(i)) {
    console.log(i);
    return;
  }
}
