const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const X = new Set();

for (let i = 0; i < N; i++) {
  const [L, ...A] = input[i + 1].split(' ').map(Number);
  X.add(A.join('_'));
}

console.log(X.size);
