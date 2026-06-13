const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = new Set();
}

for (let i = 0; i < N; i++) {
  const [, ...a] = input[i + 1].split(' ').map(Number);
  for (let j = 0; j < a.length; j++) {
    A[a[j] - 1].add(i + 1);
  }
}

for (let i = 0; i < N; i++) {
  const arr = [...A[i]];
  arr.sort((x, y) => x - y);
  console.log([arr.length, ...arr].join(' '));
}
